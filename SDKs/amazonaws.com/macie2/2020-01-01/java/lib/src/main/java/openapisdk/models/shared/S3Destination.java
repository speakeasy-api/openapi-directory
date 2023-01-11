package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3Destination
 * Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.
**/
public class S3Destination {
    @JsonProperty("bucketName")
    public String bucketName;
    public S3Destination withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPrefix")
    public String keyPrefix;
    public S3Destination withKeyPrefix(String keyPrefix) {
        this.keyPrefix = keyPrefix;
        return this;
    }
    @JsonProperty("kmsKeyArn")
    public String kmsKeyArn;
    public S3Destination withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
}