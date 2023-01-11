package openapisdk.models.shared;



/**
 * Paths
 * A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>. 
**/
public class Paths {
    public java.util.Map<String, Object>[] items;
    public Paths withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public Paths withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}