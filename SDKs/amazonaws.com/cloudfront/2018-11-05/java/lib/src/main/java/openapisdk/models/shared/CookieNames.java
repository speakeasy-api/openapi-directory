package openapisdk.models.shared;



/**
 * CookieNames
 * A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.
**/
public class CookieNames {
    public java.util.Map<String, Object>[] items;
    public CookieNames withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public CookieNames withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}