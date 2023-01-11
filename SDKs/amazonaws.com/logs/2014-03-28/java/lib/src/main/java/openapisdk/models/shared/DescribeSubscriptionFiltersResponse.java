package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSubscriptionFiltersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeSubscriptionFiltersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionFilters")
    public SubscriptionFilter[] subscriptionFilters;
    public DescribeSubscriptionFiltersResponse withSubscriptionFilters(SubscriptionFilter[] subscriptionFilters) {
        this.subscriptionFilters = subscriptionFilters;
        return this;
    }
}