package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSubscriptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subscription")
    public Subscription subscription;
    public DescribeSubscriptionResponse withSubscription(Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}