package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutComponentPolicyRequestBody {
    @JsonProperty("componentArn")
    public String componentArn;
    public PutComponentPolicyRequestBody withComponentArn(String componentArn) {
        this.componentArn = componentArn;
        return this;
    }
    @JsonProperty("policy")
    public String policy;
    public PutComponentPolicyRequestBody withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}