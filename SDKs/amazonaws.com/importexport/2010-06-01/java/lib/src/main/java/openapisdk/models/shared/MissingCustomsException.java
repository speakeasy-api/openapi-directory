package openapisdk.models.shared;



/**
 * MissingCustomsException
 * One or more required customs parameters was missing from the manifest.
**/
public class MissingCustomsException {
    public String message;
    public MissingCustomsException withMessage(String message) {
        this.message = message;
        return this;
    }
}