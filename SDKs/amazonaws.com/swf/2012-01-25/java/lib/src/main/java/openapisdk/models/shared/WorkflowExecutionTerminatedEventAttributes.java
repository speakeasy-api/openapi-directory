package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowExecutionTerminatedEventAttributes
 * Provides the details of the <code>WorkflowExecutionTerminated</code> event.
**/
public class WorkflowExecutionTerminatedEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public WorkflowExecutionTerminatedCauseEnum cause;
    public WorkflowExecutionTerminatedEventAttributes withCause(WorkflowExecutionTerminatedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonProperty("childPolicy")
    public ChildPolicyEnum childPolicy;
    public WorkflowExecutionTerminatedEventAttributes withChildPolicy(ChildPolicyEnum childPolicy) {
        this.childPolicy = childPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public WorkflowExecutionTerminatedEventAttributes withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public WorkflowExecutionTerminatedEventAttributes withReason(String reason) {
        this.reason = reason;
        return this;
    }
}