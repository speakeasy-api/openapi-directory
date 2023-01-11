package openapisdk.models.shared;



/**
 * TooManyFieldLevelEncryptionProfiles
 * The maximum number of profiles for field-level encryption have been created.
**/
public class TooManyFieldLevelEncryptionProfiles {
    public String message;
    public TooManyFieldLevelEncryptionProfiles withMessage(String message) {
        this.message = message;
        return this;
    }
}