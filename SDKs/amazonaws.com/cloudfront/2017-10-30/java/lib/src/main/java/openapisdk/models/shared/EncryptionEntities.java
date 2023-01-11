package openapisdk.models.shared;



/**
 * EncryptionEntities
 * Complex data type for field-level encryption profiles that includes all of the encryption entities. 
**/
public class EncryptionEntities {
    public EncryptionEntityList[] items;
    public EncryptionEntities withItems(EncryptionEntityList[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public EncryptionEntities withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}