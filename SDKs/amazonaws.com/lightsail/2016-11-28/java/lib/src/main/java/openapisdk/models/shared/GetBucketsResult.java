package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBucketsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buckets")
    public Bucket[] buckets;
    public GetBucketsResult withBuckets(Bucket[] buckets) {
        this.buckets = buckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetBucketsResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}