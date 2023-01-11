package openapisdk.models.shared;



/**
 * NoSuchBucketException
 * The specified bucket does not exist. Create the specified bucket or change the manifest's bucket, exportBucket, or logBucket field to a bucket that the account, as specified by the manifest's Access Key ID, has write permissions to.
**/
public class NoSuchBucketException {
    public String message;
    public NoSuchBucketException withMessage(String message) {
        this.message = message;
        return this;
    }
}