package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSubscriptionStateResponse {
    @JsonProperty("SubscriptionState")
    public SubscriptionStateEnum subscriptionState;
    public GetSubscriptionStateResponse withSubscriptionState(SubscriptionStateEnum subscriptionState) {
        this.subscriptionState = subscriptionState;
        return this;
    }
}