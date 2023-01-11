package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * S3ObjectSource
 * Template bundle S3 bucket data.
**/
public class S3ObjectSource {
    @JsonProperty("bucket")
    public String bucket;
    public S3ObjectSource withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public S3ObjectSource withKey(String key) {
        this.key = key;
        return this;
    }
}