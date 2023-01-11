package openapisdk.models.shared;



/**
 * BucketPermissionException
 * The account specified does not have the appropriate bucket permissions.
**/
public class BucketPermissionException {
    public String message;
    public BucketPermissionException withMessage(String message) {
        this.message = message;
        return this;
    }
}