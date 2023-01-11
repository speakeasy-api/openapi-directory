package openapisdk.models.shared;



/**
 * InvalidParameterException
 * One or more parameters had an invalid value.
**/
public class InvalidParameterException {
    public String message;
    public InvalidParameterException withMessage(String message) {
        this.message = message;
        return this;
    }
}