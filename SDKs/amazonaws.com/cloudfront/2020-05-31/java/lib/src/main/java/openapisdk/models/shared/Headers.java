package openapisdk.models.shared;



/**
 * Headers
 * Contains a list of HTTP header names.
**/
public class Headers {
    public java.util.Map<String, Object>[] items;
    public Headers withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public Headers withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}