package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutPolicyRequest {
    @JsonProperty("Policy")
    public String policy;
    public PutPolicyRequest withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public PutPolicyRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}