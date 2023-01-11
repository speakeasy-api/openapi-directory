package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExternalWorkflowExecutionSignaledEventAttributes
 * Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event.
**/
public class ExternalWorkflowExecutionSignaledEventAttributes {
    @JsonProperty("initiatedEventId")
    public Long initiatedEventId;
    public ExternalWorkflowExecutionSignaledEventAttributes withInitiatedEventId(Long initiatedEventId) {
        this.initiatedEventId = initiatedEventId;
        return this;
    }
    @JsonProperty("workflowExecution")
    public WorkflowExecution workflowExecution;
    public ExternalWorkflowExecutionSignaledEventAttributes withWorkflowExecution(WorkflowExecution workflowExecution) {
        this.workflowExecution = workflowExecution;
        return this;
    }
}