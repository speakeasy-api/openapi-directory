package openapisdk.models.shared;



/**
 * MissingManifestFieldException
 * One or more required fields were missing from the manifest file. Please correct and resubmit.
**/
public class MissingManifestFieldException {
    public String message;
    public MissingManifestFieldException withMessage(String message) {
        this.message = message;
        return this;
    }
}