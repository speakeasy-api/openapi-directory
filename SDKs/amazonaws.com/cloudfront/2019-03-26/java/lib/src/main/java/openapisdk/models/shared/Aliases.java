package openapisdk.models.shared;



/**
 * Aliases
 * A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. 
**/
public class Aliases {
    public java.util.Map<String, Object>[] items;
    public Aliases withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public Aliases withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}