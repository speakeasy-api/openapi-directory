package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutResourcePolicyRequest {
    @JsonProperty("Policy")
    public String policy;
    public PutResourcePolicyRequest withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public PutResourcePolicyRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}