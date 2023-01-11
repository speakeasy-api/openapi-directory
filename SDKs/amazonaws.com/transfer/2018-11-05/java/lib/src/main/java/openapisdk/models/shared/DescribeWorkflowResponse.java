package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeWorkflowResponse {
    @JsonProperty("Workflow")
    public DescribedWorkflow workflow;
    public DescribeWorkflowResponse withWorkflow(DescribedWorkflow workflow) {
        this.workflow = workflow;
        return this;
    }
}