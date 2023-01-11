package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRegistryOptions200ApplicationJsonOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription_tiers")
    public GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers[] subscriptionTiers;
    public GetRegistryOptions200ApplicationJsonOptions withSubscriptionTiers(GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers[] subscriptionTiers) {
        this.subscriptionTiers = subscriptionTiers;
        return this;
    }
}