package openapisdk.models.shared;



/**
 * OriginGroups
 * A complex data type for the origin groups specified for a distribution.
**/
public class OriginGroups {
    public OriginGroupList[] items;
    public OriginGroups withItems(OriginGroupList[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public OriginGroups withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}