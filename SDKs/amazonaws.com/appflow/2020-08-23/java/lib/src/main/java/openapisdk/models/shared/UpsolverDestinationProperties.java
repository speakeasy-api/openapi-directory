package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpsolverDestinationProperties
 *  The properties that are applied when Upsolver is used as a destination. 
**/
public class UpsolverDestinationProperties {
    @JsonProperty("bucketName")
    public String bucketName;
    public UpsolverDestinationProperties withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketPrefix")
    public String bucketPrefix;
    public UpsolverDestinationProperties withBucketPrefix(String bucketPrefix) {
        this.bucketPrefix = bucketPrefix;
        return this;
    }
    @JsonProperty("s3OutputFormatConfig")
    public UpsolverS3OutputFormatConfig s3OutputFormatConfig;
    public UpsolverDestinationProperties withS3OutputFormatConfig(UpsolverS3OutputFormatConfig s3OutputFormatConfig) {
        this.s3OutputFormatConfig = s3OutputFormatConfig;
        return this;
    }
}