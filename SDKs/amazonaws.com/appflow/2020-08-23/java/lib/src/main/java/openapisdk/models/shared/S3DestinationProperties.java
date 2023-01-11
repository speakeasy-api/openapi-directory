package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3DestinationProperties
 *  The properties that are applied when Amazon S3 is used as a destination. 
**/
public class S3DestinationProperties {
    @JsonProperty("bucketName")
    public String bucketName;
    public S3DestinationProperties withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketPrefix")
    public String bucketPrefix;
    public S3DestinationProperties withBucketPrefix(String bucketPrefix) {
        this.bucketPrefix = bucketPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3OutputFormatConfig")
    public S3OutputFormatConfig s3OutputFormatConfig;
    public S3DestinationProperties withS3OutputFormatConfig(S3OutputFormatConfig s3OutputFormatConfig) {
        this.s3OutputFormatConfig = s3OutputFormatConfig;
        return this;
    }
}