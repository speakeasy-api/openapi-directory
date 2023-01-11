package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEmailIdentityPolicyRequestBody {
    @JsonProperty("Policy")
    public String policy;
    public UpdateEmailIdentityPolicyRequestBody withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}