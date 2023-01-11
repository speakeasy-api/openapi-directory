package openapisdk.models.shared;



/**
 * CreateStorageLocationResultMessage
 * Results of a <a>CreateStorageLocationResult</a> call.
**/
public class CreateStorageLocationResultMessage {
    public String s3Bucket;
    public CreateStorageLocationResultMessage withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
}