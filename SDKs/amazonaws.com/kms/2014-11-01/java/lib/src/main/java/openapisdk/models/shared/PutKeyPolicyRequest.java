package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutKeyPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BypassPolicyLockoutSafetyCheck")
    public Boolean bypassPolicyLockoutSafetyCheck;
    public PutKeyPolicyRequest withBypassPolicyLockoutSafetyCheck(Boolean bypassPolicyLockoutSafetyCheck) {
        this.bypassPolicyLockoutSafetyCheck = bypassPolicyLockoutSafetyCheck;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public PutKeyPolicyRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("Policy")
    public String policy;
    public PutKeyPolicyRequest withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("PolicyName")
    public String policyName;
    public PutKeyPolicyRequest withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}