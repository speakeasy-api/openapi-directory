package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeWorkflowRequest {
    @JsonProperty("WorkflowId")
    public String workflowId;
    public DescribeWorkflowRequest withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}