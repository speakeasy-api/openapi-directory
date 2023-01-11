package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutResourcePolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableHybrid")
    public EnableHybridValuesEnum enableHybrid;
    public PutResourcePolicyRequest withEnableHybrid(EnableHybridValuesEnum enableHybrid) {
        this.enableHybrid = enableHybrid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyExistsCondition")
    public ExistConditionEnum policyExistsCondition;
    public PutResourcePolicyRequest withPolicyExistsCondition(ExistConditionEnum policyExistsCondition) {
        this.policyExistsCondition = policyExistsCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyHashCondition")
    public String policyHashCondition;
    public PutResourcePolicyRequest withPolicyHashCondition(String policyHashCondition) {
        this.policyHashCondition = policyHashCondition;
        return this;
    }
    @JsonProperty("PolicyInJson")
    public String policyInJson;
    public PutResourcePolicyRequest withPolicyInJson(String policyInJson) {
        this.policyInJson = policyInJson;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public PutResourcePolicyRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}