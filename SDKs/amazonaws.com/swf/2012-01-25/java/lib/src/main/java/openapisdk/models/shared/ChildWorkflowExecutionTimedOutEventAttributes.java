package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChildWorkflowExecutionTimedOutEventAttributes
 * Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.
**/
public class ChildWorkflowExecutionTimedOutEventAttributes {
    @JsonProperty("initiatedEventId")
    public Long initiatedEventId;
    public ChildWorkflowExecutionTimedOutEventAttributes withInitiatedEventId(Long initiatedEventId) {
        this.initiatedEventId = initiatedEventId;
        return this;
    }
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public ChildWorkflowExecutionTimedOutEventAttributes withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
    @JsonProperty("timeoutType")
    public WorkflowExecutionTimeoutTypeEnum timeoutType;
    public ChildWorkflowExecutionTimedOutEventAttributes withTimeoutType(WorkflowExecutionTimeoutTypeEnum timeoutType) {
        this.timeoutType = timeoutType;
        return this;
    }
    @JsonProperty("workflowExecution")
    public WorkflowExecution workflowExecution;
    public ChildWorkflowExecutionTimedOutEventAttributes withWorkflowExecution(WorkflowExecution workflowExecution) {
        this.workflowExecution = workflowExecution;
        return this;
    }
    @JsonProperty("workflowType")
    public WorkflowType workflowType;
    public ChildWorkflowExecutionTimedOutEventAttributes withWorkflowType(WorkflowType workflowType) {
        this.workflowType = workflowType;
        return this;
    }
}