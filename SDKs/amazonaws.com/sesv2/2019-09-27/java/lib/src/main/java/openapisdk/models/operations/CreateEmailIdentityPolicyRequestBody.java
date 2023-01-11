package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateEmailIdentityPolicyRequestBody {
    @JsonProperty("Policy")
    public String policy;
    public CreateEmailIdentityPolicyRequestBody withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}