package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetKeyPolicyRequest {
    @JsonProperty("KeyId")
    public String keyId;
    public GetKeyPolicyRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("PolicyName")
    public String policyName;
    public GetKeyPolicyRequest withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}