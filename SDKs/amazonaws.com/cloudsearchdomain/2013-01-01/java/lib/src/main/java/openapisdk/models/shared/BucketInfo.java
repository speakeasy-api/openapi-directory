package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BucketInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buckets")
    public Bucket[] buckets;
    public BucketInfo withBuckets(Bucket[] buckets) {
        this.buckets = buckets;
        return this;
    }
}