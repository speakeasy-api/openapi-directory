package openapisdk.models.shared;



/**
 * CookieNames
 * Contains a list of cookie names.
**/
public class CookieNames {
    public java.util.Map<String, Object>[] items;
    public CookieNames withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public CookieNames withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}