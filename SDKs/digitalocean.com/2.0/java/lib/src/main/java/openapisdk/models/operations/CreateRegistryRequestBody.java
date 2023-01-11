package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateRegistryRequestBody {
    @JsonProperty("name")
    public String name;
    public CreateRegistryRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("subscription_tier_slug")
    public CreateRegistryRequestBodySubscriptionTierSlugEnum subscriptionTierSlug;
    public CreateRegistryRequestBody withSubscriptionTierSlug(CreateRegistryRequestBodySubscriptionTierSlugEnum subscriptionTierSlug) {
        this.subscriptionTierSlug = subscriptionTierSlug;
        return this;
    }
}