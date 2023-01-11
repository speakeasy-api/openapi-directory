package openapisdk.models.shared;



/**
 * TooManyTrustedSigners
 * Your request contains more trusted signers than are allowed per distribution.
**/
public class TooManyTrustedSigners {
    public String message;
    public TooManyTrustedSigners withMessage(String message) {
        this.message = message;
        return this;
    }
}