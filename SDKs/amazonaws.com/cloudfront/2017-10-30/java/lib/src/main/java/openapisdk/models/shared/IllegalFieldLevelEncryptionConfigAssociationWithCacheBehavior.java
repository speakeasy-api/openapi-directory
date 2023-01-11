package openapisdk.models.shared;



/**
 * IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
 * The specified configuration for field-level encryption can't be associated with the specified cache behavior.
**/
public class IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior {
    public String message;
    public IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior withMessage(String message) {
        this.message = message;
        return this;
    }
}