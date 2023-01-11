package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * S3Configuration
 * Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data.
**/
public class S3Configuration {
    @JsonProperty("BucketARN")
    public String bucketARN;
    public S3Configuration withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
    @JsonProperty("FileKey")
    public String fileKey;
    public S3Configuration withFileKey(String fileKey) {
        this.fileKey = fileKey;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public S3Configuration withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}