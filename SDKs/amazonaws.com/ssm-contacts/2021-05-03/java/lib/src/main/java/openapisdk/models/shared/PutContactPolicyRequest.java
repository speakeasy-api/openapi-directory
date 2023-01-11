package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutContactPolicyRequest {
    @JsonProperty("ContactArn")
    public String contactArn;
    public PutContactPolicyRequest withContactArn(String contactArn) {
        this.contactArn = contactArn;
        return this;
    }
    @JsonProperty("Policy")
    public String policy;
    public PutContactPolicyRequest withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}