package openapisdk.models.shared;



/**
 * NoSuchPublicKey
 * The specified public key doesn't exist.
**/
public class NoSuchPublicKey {
    public String message;
    public NoSuchPublicKey withMessage(String message) {
        this.message = message;
        return this;
    }
}