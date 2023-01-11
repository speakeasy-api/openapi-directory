package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDistributionBundlesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundles")
    public DistributionBundle[] bundles;
    public GetDistributionBundlesResult withBundles(DistributionBundle[] bundles) {
        this.bundles = bundles;
        return this;
    }
}