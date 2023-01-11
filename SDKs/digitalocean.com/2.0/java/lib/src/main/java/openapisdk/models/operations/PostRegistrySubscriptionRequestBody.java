package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostRegistrySubscriptionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier_slug")
    public PostRegistrySubscriptionRequestBodyTierSlugEnum tierSlug;
    public PostRegistrySubscriptionRequestBody withTierSlug(PostRegistrySubscriptionRequestBodyTierSlugEnum tierSlug) {
        this.tierSlug = tierSlug;
        return this;
    }
}