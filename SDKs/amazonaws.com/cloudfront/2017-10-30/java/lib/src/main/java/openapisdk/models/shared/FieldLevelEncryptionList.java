package openapisdk.models.shared;



/**
 * FieldLevelEncryptionList
 * List of field-level encrpytion configurations.
**/
public class FieldLevelEncryptionList {
    public FieldLevelEncryptionSummaryList[] items;
    public FieldLevelEncryptionList withItems(FieldLevelEncryptionSummaryList[] items) {
        this.items = items;
        return this;
    }
    public Long maxItems;
    public FieldLevelEncryptionList withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    public String nextMarker;
    public FieldLevelEncryptionList withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    public Long quantity;
    public FieldLevelEncryptionList withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}