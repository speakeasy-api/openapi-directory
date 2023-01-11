package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChildWorkflowExecutionStartedEventAttributes
 * Provides the details of the <code>ChildWorkflowExecutionStarted</code> event.
**/
public class ChildWorkflowExecutionStartedEventAttributes {
    @JsonProperty("initiatedEventId")
    public Long initiatedEventId;
    public ChildWorkflowExecutionStartedEventAttributes withInitiatedEventId(Long initiatedEventId) {
        this.initiatedEventId = initiatedEventId;
        return this;
    }
    @JsonProperty("workflowExecution")
    public WorkflowExecution workflowExecution;
    public ChildWorkflowExecutionStartedEventAttributes withWorkflowExecution(WorkflowExecution workflowExecution) {
        this.workflowExecution = workflowExecution;
        return this;
    }
    @JsonProperty("workflowType")
    public WorkflowType workflowType;
    public ChildWorkflowExecutionStartedEventAttributes withWorkflowType(WorkflowType workflowType) {
        this.workflowType = workflowType;
        return this;
    }
}