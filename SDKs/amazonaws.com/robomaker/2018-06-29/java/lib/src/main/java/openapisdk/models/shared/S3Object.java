package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3Object
 * Information about an S3 object.
**/
public class S3Object {
    @JsonProperty("bucket")
    public String bucket;
    public S3Object withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public S3Object withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public S3Object withKey(String key) {
        this.key = key;
        return this;
    }
}