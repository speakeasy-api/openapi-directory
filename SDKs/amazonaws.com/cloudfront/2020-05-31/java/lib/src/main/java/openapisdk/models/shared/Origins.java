package openapisdk.models.shared;



/**
 * Origins
 * Contains information about the origins for this distribution.
**/
public class Origins {
    public OriginList[] items;
    public Origins withItems(OriginList[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public Origins withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}