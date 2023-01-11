package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEffectivePoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectivePolicies")
    public EffectivePolicy[] effectivePolicies;
    public GetEffectivePoliciesResponse withEffectivePolicies(EffectivePolicy[] effectivePolicies) {
        this.effectivePolicies = effectivePolicies;
        return this;
    }
}