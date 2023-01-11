package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowExecutionConfiguration
 * The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.
**/
public class WorkflowExecutionConfiguration {
    @JsonProperty("childPolicy")
    public ChildPolicyEnum childPolicy;
    public WorkflowExecutionConfiguration withChildPolicy(ChildPolicyEnum childPolicy) {
        this.childPolicy = childPolicy;
        return this;
    }
    @JsonProperty("executionStartToCloseTimeout")
    public String executionStartToCloseTimeout;
    public WorkflowExecutionConfiguration withExecutionStartToCloseTimeout(String executionStartToCloseTimeout) {
        this.executionStartToCloseTimeout = executionStartToCloseTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaRole")
    public String lambdaRole;
    public WorkflowExecutionConfiguration withLambdaRole(String lambdaRole) {
        this.lambdaRole = lambdaRole;
        return this;
    }
    @JsonProperty("taskList")
    public TaskList taskList;
    public WorkflowExecutionConfiguration withTaskList(TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskPriority")
    public String taskPriority;
    public WorkflowExecutionConfiguration withTaskPriority(String taskPriority) {
        this.taskPriority = taskPriority;
        return this;
    }
    @JsonProperty("taskStartToCloseTimeout")
    public String taskStartToCloseTimeout;
    public WorkflowExecutionConfiguration withTaskStartToCloseTimeout(String taskStartToCloseTimeout) {
        this.taskStartToCloseTimeout = taskStartToCloseTimeout;
        return this;
    }
}