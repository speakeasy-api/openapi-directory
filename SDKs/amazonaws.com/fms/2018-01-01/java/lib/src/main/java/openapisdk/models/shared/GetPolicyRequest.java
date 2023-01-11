package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPolicyRequest {
    @JsonProperty("PolicyId")
    public String policyId;
    public GetPolicyRequest withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
}