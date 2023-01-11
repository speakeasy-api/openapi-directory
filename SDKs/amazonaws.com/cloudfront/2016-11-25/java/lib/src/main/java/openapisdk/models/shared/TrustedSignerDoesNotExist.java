package openapisdk.models.shared;



/**
 * TrustedSignerDoesNotExist
 * One or more of your trusted signers do not exist.
**/
public class TrustedSignerDoesNotExist {
    public String message;
    public TrustedSignerDoesNotExist withMessage(String message) {
        this.message = message;
        return this;
    }
}