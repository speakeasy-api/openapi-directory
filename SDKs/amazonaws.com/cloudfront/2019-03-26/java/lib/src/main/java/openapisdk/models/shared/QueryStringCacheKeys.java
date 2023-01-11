package openapisdk.models.shared;



/**
 * QueryStringCacheKeys
 * A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior. 
**/
public class QueryStringCacheKeys {
    public java.util.Map<String, Object>[] items;
    public QueryStringCacheKeys withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public QueryStringCacheKeys withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}