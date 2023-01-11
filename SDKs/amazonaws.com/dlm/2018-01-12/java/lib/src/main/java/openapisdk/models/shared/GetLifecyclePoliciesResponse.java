package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLifecyclePoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policies")
    public LifecyclePolicySummary[] policies;
    public GetLifecyclePoliciesResponse withPolicies(LifecyclePolicySummary[] policies) {
        this.policies = policies;
        return this;
    }
}