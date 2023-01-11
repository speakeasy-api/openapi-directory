package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChildWorkflowExecutionCompletedEventAttributes
 * Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event.
**/
public class ChildWorkflowExecutionCompletedEventAttributes {
    @JsonProperty("initiatedEventId")
    public Long initiatedEventId;
    public ChildWorkflowExecutionCompletedEventAttributes withInitiatedEventId(Long initiatedEventId) {
        this.initiatedEventId = initiatedEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public ChildWorkflowExecutionCompletedEventAttributes withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public ChildWorkflowExecutionCompletedEventAttributes withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
    @JsonProperty("workflowExecution")
    public WorkflowExecution workflowExecution;
    public ChildWorkflowExecutionCompletedEventAttributes withWorkflowExecution(WorkflowExecution workflowExecution) {
        this.workflowExecution = workflowExecution;
        return this;
    }
    @JsonProperty("workflowType")
    public WorkflowType workflowType;
    public ChildWorkflowExecutionCompletedEventAttributes withWorkflowType(WorkflowType workflowType) {
        this.workflowType = workflowType;
        return this;
    }
}