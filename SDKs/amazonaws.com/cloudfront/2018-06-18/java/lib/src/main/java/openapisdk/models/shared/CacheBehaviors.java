package openapisdk.models.shared;



/**
 * CacheBehaviors
 * A complex type that contains zero or more <code>CacheBehavior</code> elements. 
**/
public class CacheBehaviors {
    public CacheBehaviorList[] items;
    public CacheBehaviors withItems(CacheBehaviorList[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public CacheBehaviors withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}