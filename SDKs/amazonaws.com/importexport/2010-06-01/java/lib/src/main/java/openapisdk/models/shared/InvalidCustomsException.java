package openapisdk.models.shared;



/**
 * InvalidCustomsException
 * One or more customs parameters was invalid. Please correct and resubmit.
**/
public class InvalidCustomsException {
    public String message;
    public InvalidCustomsException withMessage(String message) {
        this.message = message;
        return this;
    }
}