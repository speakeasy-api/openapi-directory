package openapisdk.models.shared;



/**
 * MalformedManifestException
 * Your manifest is not well-formed.
**/
public class MalformedManifestException {
    public String message;
    public MalformedManifestException withMessage(String message) {
        this.message = message;
        return this;
    }
}