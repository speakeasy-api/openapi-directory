package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLifecyclePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyId")
    public String policyId;
    public CreateLifecyclePolicyResponse withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
}