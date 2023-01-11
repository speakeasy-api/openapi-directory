package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutFileSystemPolicyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BypassPolicyLockoutSafetyCheck")
    public Boolean bypassPolicyLockoutSafetyCheck;
    public PutFileSystemPolicyRequestBody withBypassPolicyLockoutSafetyCheck(Boolean bypassPolicyLockoutSafetyCheck) {
        this.bypassPolicyLockoutSafetyCheck = bypassPolicyLockoutSafetyCheck;
        return this;
    }
    @JsonProperty("Policy")
    public String policy;
    public PutFileSystemPolicyRequestBody withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}