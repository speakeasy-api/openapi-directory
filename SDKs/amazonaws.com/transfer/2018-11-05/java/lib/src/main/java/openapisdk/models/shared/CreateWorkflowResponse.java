package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateWorkflowResponse {
    @JsonProperty("WorkflowId")
    public String workflowId;
    public CreateWorkflowResponse withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}