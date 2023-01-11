package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutResourcePolicyRequestBody {
    @JsonProperty("policy")
    public String policy;
    public PutResourcePolicyRequestBody withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("resourceArn")
    public String resourceArn;
    public PutResourcePolicyRequestBody withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}