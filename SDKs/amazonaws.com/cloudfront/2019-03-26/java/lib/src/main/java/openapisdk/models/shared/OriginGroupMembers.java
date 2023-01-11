package openapisdk.models.shared;



/**
 * OriginGroupMembers
 * A complex data type for the origins included in an origin group.
**/
public class OriginGroupMembers {
    public OriginGroupMemberList[] items;
    public OriginGroupMembers withItems(OriginGroupMemberList[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public OriginGroupMembers withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}