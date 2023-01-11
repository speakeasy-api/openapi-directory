package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public Policy policy;
    public GetPolicyResponse withPolicy(Policy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyArn")
    public String policyArn;
    public GetPolicyResponse withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
}