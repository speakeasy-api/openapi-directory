package openapisdk.models.shared;



/**
 * FieldPatterns
 * A complex data type that includes the field patterns to match for field-level encryption.
**/
public class FieldPatterns {
    public java.util.Map<String, Object>[] items;
    public FieldPatterns withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public FieldPatterns withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}