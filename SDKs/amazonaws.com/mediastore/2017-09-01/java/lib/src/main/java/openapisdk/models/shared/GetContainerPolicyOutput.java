package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetContainerPolicyOutput {
    @JsonProperty("Policy")
    public String policy;
    public GetContainerPolicyOutput withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}