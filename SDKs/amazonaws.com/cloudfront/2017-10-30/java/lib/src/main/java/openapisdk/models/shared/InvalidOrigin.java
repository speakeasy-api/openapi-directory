package openapisdk.models.shared;



/**
 * InvalidOrigin
 * The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.
**/
public class InvalidOrigin {
    public String message;
    public InvalidOrigin withMessage(String message) {
        this.message = message;
        return this;
    }
}