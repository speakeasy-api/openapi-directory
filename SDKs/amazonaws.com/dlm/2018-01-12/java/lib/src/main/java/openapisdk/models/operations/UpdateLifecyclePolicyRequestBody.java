package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLifecyclePolicyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateLifecyclePolicyRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutionRoleArn")
    public String executionRoleArn;
    public UpdateLifecyclePolicyRequestBody withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyDetails")
    public UpdateLifecyclePolicyRequestBodyPolicyDetails policyDetails;
    public UpdateLifecyclePolicyRequestBody withPolicyDetails(UpdateLifecyclePolicyRequestBodyPolicyDetails policyDetails) {
        this.policyDetails = policyDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public UpdateLifecyclePolicyRequestBodyStateEnum state;
    public UpdateLifecyclePolicyRequestBody withState(UpdateLifecyclePolicyRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
}