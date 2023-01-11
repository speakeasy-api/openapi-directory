package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3Logs
 * Amazon S3 logging configuration.
**/
public class S3Logs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3BucketName")
    public String s3BucketName;
    public S3Logs withS3BucketName(String s3BucketName) {
        this.s3BucketName = s3BucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3KeyPrefix")
    public String s3KeyPrefix;
    public S3Logs withS3KeyPrefix(String s3KeyPrefix) {
        this.s3KeyPrefix = s3KeyPrefix;
        return this;
    }
}