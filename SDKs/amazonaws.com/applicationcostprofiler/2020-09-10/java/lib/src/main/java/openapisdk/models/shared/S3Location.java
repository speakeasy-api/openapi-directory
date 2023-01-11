package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * S3Location
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
**/
public class S3Location {
    @JsonProperty("bucket")
    public String bucket;
    public S3Location withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonProperty("prefix")
    public String prefix;
    public S3Location withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}