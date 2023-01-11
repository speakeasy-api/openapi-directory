package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3BucketLogDestination
 * Specifies an Amazon S3 bucket for logging audio conversations
**/
public class S3BucketLogDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyArn")
    public String kmsKeyArn;
    public S3BucketLogDestination withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
    @JsonProperty("logPrefix")
    public String logPrefix;
    public S3BucketLogDestination withLogPrefix(String logPrefix) {
        this.logPrefix = logPrefix;
        return this;
    }
    @JsonProperty("s3BucketArn")
    public String s3BucketArn;
    public S3BucketLogDestination withS3BucketArn(String s3BucketArn) {
        this.s3BucketArn = s3BucketArn;
        return this;
    }
}