package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourcePolicyOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public String policy;
    public GetResourcePolicyOutput withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}