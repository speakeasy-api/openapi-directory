package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartChildWorkflowExecutionFailedEventAttributes
 * Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event.
**/
public class StartChildWorkflowExecutionFailedEventAttributes {
    @JsonProperty("cause")
    public StartChildWorkflowExecutionFailedCauseEnum cause;
    public StartChildWorkflowExecutionFailedEventAttributes withCause(StartChildWorkflowExecutionFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control")
    public String control;
    public StartChildWorkflowExecutionFailedEventAttributes withControl(String control) {
        this.control = control;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public StartChildWorkflowExecutionFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonProperty("initiatedEventId")
    public Long initiatedEventId;
    public StartChildWorkflowExecutionFailedEventAttributes withInitiatedEventId(Long initiatedEventId) {
        this.initiatedEventId = initiatedEventId;
        return this;
    }
    @JsonProperty("workflowId")
    public String workflowId;
    public StartChildWorkflowExecutionFailedEventAttributes withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
    @JsonProperty("workflowType")
    public WorkflowType workflowType;
    public StartChildWorkflowExecutionFailedEventAttributes withWorkflowType(WorkflowType workflowType) {
        this.workflowType = workflowType;
        return this;
    }
}