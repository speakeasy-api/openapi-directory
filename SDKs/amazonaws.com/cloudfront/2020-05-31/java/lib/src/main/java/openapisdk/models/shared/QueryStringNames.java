package openapisdk.models.shared;



/**
 * QueryStringNames
 * Contains a list of query string names.
**/
public class QueryStringNames {
    public java.util.Map<String, Object>[] items;
    public QueryStringNames withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public QueryStringNames withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}