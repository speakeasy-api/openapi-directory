package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRegistryPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyText")
    public String policyText;
    public PutRegistryPolicyResponse withPolicyText(String policyText) {
        this.policyText = policyText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public PutRegistryPolicyResponse withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
}