package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WorkflowDetail
 * Specifies the workflow ID for the workflow to assign and the execution role used for executing the workflow.
**/
public class WorkflowDetail {
    @JsonProperty("ExecutionRole")
    public String executionRole;
    public WorkflowDetail withExecutionRole(String executionRole) {
        this.executionRole = executionRole;
        return this;
    }
    @JsonProperty("WorkflowId")
    public String workflowId;
    public WorkflowDetail withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}