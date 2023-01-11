package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3SourceProperties
 *  The properties that are applied when Amazon S3 is being used as the flow source. 
**/
public class S3SourceProperties {
    @JsonProperty("bucketName")
    public String bucketName;
    public S3SourceProperties withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketPrefix")
    public String bucketPrefix;
    public S3SourceProperties withBucketPrefix(String bucketPrefix) {
        this.bucketPrefix = bucketPrefix;
        return this;
    }
}