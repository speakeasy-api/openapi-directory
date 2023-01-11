package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutApprovalResultInput
 * Represents the input of a <code>PutApprovalResult</code> action.
**/
public class PutApprovalResultInput {
    @JsonProperty("actionName")
    public String actionName;
    public PutApprovalResultInput withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
    @JsonProperty("pipelineName")
    public String pipelineName;
    public PutApprovalResultInput withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
    @JsonProperty("result")
    public ApprovalResult result;
    public PutApprovalResultInput withResult(ApprovalResult result) {
        this.result = result;
        return this;
    }
    @JsonProperty("stageName")
    public String stageName;
    public PutApprovalResultInput withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
    @JsonProperty("token")
    public String token;
    public PutApprovalResultInput withToken(String token) {
        this.token = token;
        return this;
    }
}