package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateResourcePolicyRequestBody {
    @JsonProperty("policy")
    public String policy;
    public CreateResourcePolicyRequestBody withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}