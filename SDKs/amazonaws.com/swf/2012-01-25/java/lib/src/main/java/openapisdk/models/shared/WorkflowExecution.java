package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WorkflowExecution
 * Represents a workflow execution.
**/
public class WorkflowExecution {
    @JsonProperty("runId")
    public String runId;
    public WorkflowExecution withRunId(String runId) {
        this.runId = runId;
        return this;
    }
    @JsonProperty("workflowId")
    public String workflowId;
    public WorkflowExecution withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}