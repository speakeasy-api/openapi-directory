package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3InputFileLocation
 * Specifies the details for the S3 file being copied.
**/
public class S3InputFileLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Bucket")
    public String bucket;
    public S3InputFileLocation withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public S3InputFileLocation withKey(String key) {
        this.key = key;
        return this;
    }
}