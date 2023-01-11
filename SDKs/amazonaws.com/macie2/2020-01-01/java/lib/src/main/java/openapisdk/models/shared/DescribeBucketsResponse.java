package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeBucketsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buckets")
    public BucketMetadata[] buckets;
    public DescribeBucketsResponse withBuckets(BucketMetadata[] buckets) {
        this.buckets = buckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeBucketsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}