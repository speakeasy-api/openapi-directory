package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutRegistryPolicyRequest {
    @JsonProperty("policyText")
    public String policyText;
    public PutRegistryPolicyRequest withPolicyText(String policyText) {
        this.policyText = policyText;
        return this;
    }
}