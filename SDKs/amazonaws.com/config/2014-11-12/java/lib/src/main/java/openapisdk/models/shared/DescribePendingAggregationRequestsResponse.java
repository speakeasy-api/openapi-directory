package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribePendingAggregationRequestsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribePendingAggregationRequestsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingAggregationRequests")
    public PendingAggregationRequest[] pendingAggregationRequests;
    public DescribePendingAggregationRequestsResponse withPendingAggregationRequests(PendingAggregationRequest[] pendingAggregationRequests) {
        this.pendingAggregationRequests = pendingAggregationRequests;
        return this;
    }
}