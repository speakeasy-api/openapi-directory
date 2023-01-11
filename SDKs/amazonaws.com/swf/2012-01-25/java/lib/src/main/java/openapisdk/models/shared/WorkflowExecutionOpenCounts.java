package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowExecutionOpenCounts
 * Contains the counts of open tasks, child workflow executions and timers for a workflow execution.
**/
public class WorkflowExecutionOpenCounts {
    @JsonProperty("openActivityTasks")
    public Long openActivityTasks;
    public WorkflowExecutionOpenCounts withOpenActivityTasks(Long openActivityTasks) {
        this.openActivityTasks = openActivityTasks;
        return this;
    }
    @JsonProperty("openChildWorkflowExecutions")
    public Long openChildWorkflowExecutions;
    public WorkflowExecutionOpenCounts withOpenChildWorkflowExecutions(Long openChildWorkflowExecutions) {
        this.openChildWorkflowExecutions = openChildWorkflowExecutions;
        return this;
    }
    @JsonProperty("openDecisionTasks")
    public Long openDecisionTasks;
    public WorkflowExecutionOpenCounts withOpenDecisionTasks(Long openDecisionTasks) {
        this.openDecisionTasks = openDecisionTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openLambdaFunctions")
    public Long openLambdaFunctions;
    public WorkflowExecutionOpenCounts withOpenLambdaFunctions(Long openLambdaFunctions) {
        this.openLambdaFunctions = openLambdaFunctions;
        return this;
    }
    @JsonProperty("openTimers")
    public Long openTimers;
    public WorkflowExecutionOpenCounts withOpenTimers(Long openTimers) {
        this.openTimers = openTimers;
        return this;
    }
}