package openapisdk.models.shared;



/**
 * FieldLevelEncryptionProfileList
 * List of field-level encryption profiles.
**/
public class FieldLevelEncryptionProfileList {
    public FieldLevelEncryptionProfileSummaryList[] items;
    public FieldLevelEncryptionProfileList withItems(FieldLevelEncryptionProfileSummaryList[] items) {
        this.items = items;
        return this;
    }
    public Long maxItems;
    public FieldLevelEncryptionProfileList withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    public String nextMarker;
    public FieldLevelEncryptionProfileList withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    public Long quantity;
    public FieldLevelEncryptionProfileList withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}