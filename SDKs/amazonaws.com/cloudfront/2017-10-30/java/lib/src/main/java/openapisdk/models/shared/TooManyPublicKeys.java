package openapisdk.models.shared;



/**
 * TooManyPublicKeys
 * The maximum number of public keys for field-level encryption have been created. To create a new public key, delete one of the existing keys.
**/
public class TooManyPublicKeys {
    public String message;
    public TooManyPublicKeys withMessage(String message) {
        this.message = message;
        return this;
    }
}