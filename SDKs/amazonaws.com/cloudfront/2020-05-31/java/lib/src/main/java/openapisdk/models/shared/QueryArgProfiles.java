package openapisdk.models.shared;



/**
 * QueryArgProfiles
 * Query argument-profile mapping for field-level encryption.
**/
public class QueryArgProfiles {
    public QueryArgProfileList[] items;
    public QueryArgProfiles withItems(QueryArgProfileList[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public QueryArgProfiles withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}