package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventSubscriptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListEventSubscriptionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("subscriptions")
    public Subscription[] subscriptions;
    public ListEventSubscriptionsResponse withSubscriptions(Subscription[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
}