package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContactPolicyResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactArn")
    public String contactArn;
    public GetContactPolicyResult withContactArn(String contactArn) {
        this.contactArn = contactArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public String policy;
    public GetContactPolicyResult withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}