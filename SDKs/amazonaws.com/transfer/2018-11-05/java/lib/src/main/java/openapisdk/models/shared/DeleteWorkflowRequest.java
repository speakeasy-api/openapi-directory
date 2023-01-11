package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteWorkflowRequest {
    @JsonProperty("WorkflowId")
    public String workflowId;
    public DeleteWorkflowRequest withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}