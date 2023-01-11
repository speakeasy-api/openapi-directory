package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutResourcePolicyOutput {
    @JsonProperty("policyId")
    public String policyId;
    public PutResourcePolicyOutput withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
}