package openapisdk.models.shared;



/**
 * InvalidAddressException
 * The address specified in the manifest is invalid.
**/
public class InvalidAddressException {
    public String message;
    public InvalidAddressException withMessage(String message) {
        this.message = message;
        return this;
    }
}