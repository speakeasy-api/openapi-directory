package openapisdk.models.shared;



/**
 * AllowedMethods
 * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>
**/
public class AllowedMethods {
    public CachedMethods cachedMethods;
    public AllowedMethods withCachedMethods(CachedMethods cachedMethods) {
        this.cachedMethods = cachedMethods;
        return this;
    }
    public java.util.Map<String, Object>[] items;
    public AllowedMethods withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public AllowedMethods withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}