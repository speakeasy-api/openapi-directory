package openapisdk.models.shared;



/**
 * CancelBundleTaskResultBundleTaskStorage
 * The Amazon S3 storage locations.
**/
public class CancelBundleTaskResultBundleTaskStorage {
    public S3Storage s3;
    public CancelBundleTaskResultBundleTaskStorage withS3(S3Storage s3) {
        this.s3 = s3;
        return this;
    }
}