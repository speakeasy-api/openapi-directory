package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLifecyclePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public LifecyclePolicy policy;
    public GetLifecyclePolicyResponse withPolicy(LifecyclePolicy policy) {
        this.policy = policy;
        return this;
    }
}