package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowTypeConfiguration
 * The configuration settings of a workflow type.
**/
public class WorkflowTypeConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultChildPolicy")
    public ChildPolicyEnum defaultChildPolicy;
    public WorkflowTypeConfiguration withDefaultChildPolicy(ChildPolicyEnum defaultChildPolicy) {
        this.defaultChildPolicy = defaultChildPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultExecutionStartToCloseTimeout")
    public String defaultExecutionStartToCloseTimeout;
    public WorkflowTypeConfiguration withDefaultExecutionStartToCloseTimeout(String defaultExecutionStartToCloseTimeout) {
        this.defaultExecutionStartToCloseTimeout = defaultExecutionStartToCloseTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLambdaRole")
    public String defaultLambdaRole;
    public WorkflowTypeConfiguration withDefaultLambdaRole(String defaultLambdaRole) {
        this.defaultLambdaRole = defaultLambdaRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultTaskList")
    public TaskList defaultTaskList;
    public WorkflowTypeConfiguration withDefaultTaskList(TaskList defaultTaskList) {
        this.defaultTaskList = defaultTaskList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultTaskPriority")
    public String defaultTaskPriority;
    public WorkflowTypeConfiguration withDefaultTaskPriority(String defaultTaskPriority) {
        this.defaultTaskPriority = defaultTaskPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultTaskStartToCloseTimeout")
    public String defaultTaskStartToCloseTimeout;
    public WorkflowTypeConfiguration withDefaultTaskStartToCloseTimeout(String defaultTaskStartToCloseTimeout) {
        this.defaultTaskStartToCloseTimeout = defaultTaskStartToCloseTimeout;
        return this;
    }
}