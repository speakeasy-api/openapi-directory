package openapisdk.models.shared;



/**
 * MissingParameterException
 * One or more required parameters was missing from the request.
**/
public class MissingParameterException {
    public String message;
    public MissingParameterException withMessage(String message) {
        this.message = message;
        return this;
    }
}