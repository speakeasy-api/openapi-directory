package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateResourcePolicyRequestBody {
    @JsonProperty("policy")
    public String policy;
    public UpdateResourcePolicyRequestBody withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}