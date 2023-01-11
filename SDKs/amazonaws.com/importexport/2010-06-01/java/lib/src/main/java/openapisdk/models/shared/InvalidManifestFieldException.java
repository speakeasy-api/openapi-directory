package openapisdk.models.shared;



/**
 * InvalidManifestFieldException
 * One or more manifest fields was invalid. Please correct and resubmit.
**/
public class InvalidManifestFieldException {
    public String message;
    public InvalidManifestFieldException withMessage(String message) {
        this.message = message;
        return this;
    }
}