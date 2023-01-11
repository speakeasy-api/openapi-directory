package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WorkflowExecutionFilter
 * Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.
**/
public class WorkflowExecutionFilter {
    @JsonProperty("workflowId")
    public String workflowId;
    public WorkflowExecutionFilter withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}