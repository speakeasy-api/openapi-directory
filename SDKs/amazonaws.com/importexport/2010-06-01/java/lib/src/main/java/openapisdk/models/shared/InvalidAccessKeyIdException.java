package openapisdk.models.shared;



/**
 * InvalidAccessKeyIdException
 * The AWS Access Key ID specified in the request did not match the manifest's accessKeyId value. The manifest and the request authentication must use the same AWS Access Key ID.
**/
public class InvalidAccessKeyIdException {
    public String message;
    public InvalidAccessKeyIdException withMessage(String message) {
        this.message = message;
        return this;
    }
}