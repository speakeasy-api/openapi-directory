package openapisdk.models.shared;



/**
 * S3Storage
 * Describes the storage parameters for Amazon S3 and Amazon S3 buckets for an instance store-backed AMI.
**/
public class S3Storage {
    public String awsAccessKeyId;
    public S3Storage withAwsAccessKeyId(String awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }
    public java.util.Map<String, Object> bucket;
    public S3Storage withBucket(java.util.Map<String, Object> bucket) {
        this.bucket = bucket;
        return this;
    }
    public java.util.Map<String, Object> prefix;
    public S3Storage withPrefix(java.util.Map<String, Object> prefix) {
        this.prefix = prefix;
        return this;
    }
    public java.util.Map<String, Object> uploadPolicy;
    public S3Storage withUploadPolicy(java.util.Map<String, Object> uploadPolicy) {
        this.uploadPolicy = uploadPolicy;
        return this;
    }
    public java.util.Map<String, Object> uploadPolicySignature;
    public S3Storage withUploadPolicySignature(java.util.Map<String, Object> uploadPolicySignature) {
        this.uploadPolicySignature = uploadPolicySignature;
        return this;
    }
}