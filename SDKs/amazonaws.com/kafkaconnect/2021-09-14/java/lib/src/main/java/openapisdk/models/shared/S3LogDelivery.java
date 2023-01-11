package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3LogDelivery
 * Details about delivering logs to Amazon S3.
**/
public class S3LogDelivery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public S3LogDelivery withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public S3LogDelivery withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public S3LogDelivery withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}