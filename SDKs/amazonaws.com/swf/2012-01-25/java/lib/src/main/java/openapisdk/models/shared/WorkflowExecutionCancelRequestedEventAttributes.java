package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowExecutionCancelRequestedEventAttributes
 * Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.
**/
public class WorkflowExecutionCancelRequestedEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public WorkflowExecutionCancelRequestedCauseEnum cause;
    public WorkflowExecutionCancelRequestedEventAttributes withCause(WorkflowExecutionCancelRequestedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalInitiatedEventId")
    public Long externalInitiatedEventId;
    public WorkflowExecutionCancelRequestedEventAttributes withExternalInitiatedEventId(Long externalInitiatedEventId) {
        this.externalInitiatedEventId = externalInitiatedEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalWorkflowExecution")
    public WorkflowExecution externalWorkflowExecution;
    public WorkflowExecutionCancelRequestedEventAttributes withExternalWorkflowExecution(WorkflowExecution externalWorkflowExecution) {
        this.externalWorkflowExecution = externalWorkflowExecution;
        return this;
    }
}