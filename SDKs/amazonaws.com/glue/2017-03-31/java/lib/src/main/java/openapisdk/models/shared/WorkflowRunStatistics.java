package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowRunStatistics
 * Workflow run statistics provides statistics about the workflow run.
**/
public class WorkflowRunStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedActions")
    public Long failedActions;
    public WorkflowRunStatistics withFailedActions(Long failedActions) {
        this.failedActions = failedActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunningActions")
    public Long runningActions;
    public WorkflowRunStatistics withRunningActions(Long runningActions) {
        this.runningActions = runningActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StoppedActions")
    public Long stoppedActions;
    public WorkflowRunStatistics withStoppedActions(Long stoppedActions) {
        this.stoppedActions = stoppedActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SucceededActions")
    public Long succeededActions;
    public WorkflowRunStatistics withSucceededActions(Long succeededActions) {
        this.succeededActions = succeededActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeoutActions")
    public Long timeoutActions;
    public WorkflowRunStatistics withTimeoutActions(Long timeoutActions) {
        this.timeoutActions = timeoutActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalActions")
    public Long totalActions;
    public WorkflowRunStatistics withTotalActions(Long totalActions) {
        this.totalActions = totalActions;
        return this;
    }
}