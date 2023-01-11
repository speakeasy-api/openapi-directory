package openapisdk.models.shared;



/**
 * AccessLog
 * Information about the <code>AccessLog</code> attribute.
**/
public class AccessLog {
    public Long emitInterval;
    public AccessLog withEmitInterval(Long emitInterval) {
        this.emitInterval = emitInterval;
        return this;
    }
    public Boolean enabled;
    public AccessLog withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public String s3BucketName;
    public AccessLog withS3BucketName(String s3BucketName) {
        this.s3BucketName = s3BucketName;
        return this;
    }
    public String s3BucketPrefix;
    public AccessLog withS3BucketPrefix(String s3BucketPrefix) {
        this.s3BucketPrefix = s3BucketPrefix;
        return this;
    }
}