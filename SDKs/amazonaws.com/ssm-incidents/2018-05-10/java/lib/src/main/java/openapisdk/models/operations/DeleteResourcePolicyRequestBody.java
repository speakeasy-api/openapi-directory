package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteResourcePolicyRequestBody {
    @JsonProperty("policyId")
    public String policyId;
    public DeleteResourcePolicyRequestBody withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonProperty("resourceArn")
    public String resourceArn;
    public DeleteResourcePolicyRequestBody withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}