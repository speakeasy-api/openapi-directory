package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChildWorkflowExecutionTerminatedEventAttributes
 * Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event.
**/
public class ChildWorkflowExecutionTerminatedEventAttributes {
    @JsonProperty("initiatedEventId")
    public Long initiatedEventId;
    public ChildWorkflowExecutionTerminatedEventAttributes withInitiatedEventId(Long initiatedEventId) {
        this.initiatedEventId = initiatedEventId;
        return this;
    }
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public ChildWorkflowExecutionTerminatedEventAttributes withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
    @JsonProperty("workflowExecution")
    public WorkflowExecution workflowExecution;
    public ChildWorkflowExecutionTerminatedEventAttributes withWorkflowExecution(WorkflowExecution workflowExecution) {
        this.workflowExecution = workflowExecution;
        return this;
    }
    @JsonProperty("workflowType")
    public WorkflowType workflowType;
    public ChildWorkflowExecutionTerminatedEventAttributes withWorkflowType(WorkflowType workflowType) {
        this.workflowType = workflowType;
        return this;
    }
}