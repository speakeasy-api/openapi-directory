package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBucketsAggregationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buckets")
    public Bucket[] buckets;
    public GetBucketsAggregationResponse withBuckets(Bucket[] buckets) {
        this.buckets = buckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Long totalCount;
    public GetBucketsAggregationResponse withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}