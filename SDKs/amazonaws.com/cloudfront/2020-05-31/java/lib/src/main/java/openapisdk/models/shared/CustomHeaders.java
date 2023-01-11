package openapisdk.models.shared;



/**
 * CustomHeaders
 * A complex type that contains the list of Custom Headers for each origin. 
**/
public class CustomHeaders {
    public OriginCustomHeadersList[] items;
    public CustomHeaders withItems(OriginCustomHeadersList[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public CustomHeaders withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}