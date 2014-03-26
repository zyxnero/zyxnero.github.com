$(document).ready(function() {
        $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox({
            afterShow: function() {
                $(".fancybox-title").wrapInner('<div />').show();     
                $(".fancybox-wrap").hover(function() {
                $(".fancybox-title").show();
                 }, function() {
                $(".fancybox-title").hide();
                });
            },  
            openEffect     : 'fade',
            closeEffect    : 'fade',
            nextEffect      : 'fade',
            prevEffect      : 'fade',
            padding : 0,
            helpers : {
                        title : { type : 'over' },
                        overlay : { locked : false }
                      }
    });
});