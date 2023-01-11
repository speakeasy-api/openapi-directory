package openapisdk.models.shared;



/**
 * BundleInstanceResultBundleTaskStorage
 * The Amazon S3 storage locations.
**/
public class BundleInstanceResultBundleTaskStorage {
    public S3Storage s3;
    public BundleInstanceResultBundleTaskStorage withS3(S3Storage s3) {
        this.s3 = s3;
        return this;
    }
}