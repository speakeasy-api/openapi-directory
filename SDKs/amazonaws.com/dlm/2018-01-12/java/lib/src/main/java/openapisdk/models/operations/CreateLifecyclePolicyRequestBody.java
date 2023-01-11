package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLifecyclePolicyRequestBody {
    @JsonProperty("Description")
    public String description;
    public CreateLifecyclePolicyRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("ExecutionRoleArn")
    public String executionRoleArn;
    public CreateLifecyclePolicyRequestBody withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonProperty("PolicyDetails")
    public CreateLifecyclePolicyRequestBodyPolicyDetails policyDetails;
    public CreateLifecyclePolicyRequestBody withPolicyDetails(CreateLifecyclePolicyRequestBodyPolicyDetails policyDetails) {
        this.policyDetails = policyDetails;
        return this;
    }
    @JsonProperty("State")
    public CreateLifecyclePolicyRequestBodyStateEnum state;
    public CreateLifecyclePolicyRequestBody withState(CreateLifecyclePolicyRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateLifecyclePolicyRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}