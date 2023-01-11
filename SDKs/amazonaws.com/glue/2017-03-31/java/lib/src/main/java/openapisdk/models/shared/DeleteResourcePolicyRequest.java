package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteResourcePolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyHashCondition")
    public String policyHashCondition;
    public DeleteResourcePolicyRequest withPolicyHashCondition(String policyHashCondition) {
        this.policyHashCondition = policyHashCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public DeleteResourcePolicyRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}