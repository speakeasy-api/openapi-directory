/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SignalExternalWorkflowExecutionFailedEventAttributes - Provides the details of the &lt;code&gt;SignalExternalWorkflowExecutionFailed&lt;/code&gt; event.
 */
public class SignalExternalWorkflowExecutionFailedEventAttributes {
    @JsonProperty("cause")
    public SignalExternalWorkflowExecutionFailedCauseEnum cause;

    public SignalExternalWorkflowExecutionFailedEventAttributes withCause(SignalExternalWorkflowExecutionFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control")
    public String control;

    public SignalExternalWorkflowExecutionFailedEventAttributes withControl(String control) {
        this.control = control;
        return this;
    }
    
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;

    public SignalExternalWorkflowExecutionFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    
    @JsonProperty("initiatedEventId")
    public Long initiatedEventId;

    public SignalExternalWorkflowExecutionFailedEventAttributes withInitiatedEventId(Long initiatedEventId) {
        this.initiatedEventId = initiatedEventId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runId")
    public String runId;

    public SignalExternalWorkflowExecutionFailedEventAttributes withRunId(String runId) {
        this.runId = runId;
        return this;
    }
    
    @JsonProperty("workflowId")
    public String workflowId;

    public SignalExternalWorkflowExecutionFailedEventAttributes withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
    
    public SignalExternalWorkflowExecutionFailedEventAttributes(@JsonProperty("cause") SignalExternalWorkflowExecutionFailedCauseEnum cause, @JsonProperty("decisionTaskCompletedEventId") Long decisionTaskCompletedEventId, @JsonProperty("initiatedEventId") Long initiatedEventId, @JsonProperty("workflowId") String workflowId) {
        this.cause = cause;
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        this.initiatedEventId = initiatedEventId;
        this.workflowId = workflowId;
  }
}
