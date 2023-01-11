package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterWorkflowTypeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultChildPolicy")
    public ChildPolicyEnum defaultChildPolicy;
    public RegisterWorkflowTypeInput withDefaultChildPolicy(ChildPolicyEnum defaultChildPolicy) {
        this.defaultChildPolicy = defaultChildPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultExecutionStartToCloseTimeout")
    public String defaultExecutionStartToCloseTimeout;
    public RegisterWorkflowTypeInput withDefaultExecutionStartToCloseTimeout(String defaultExecutionStartToCloseTimeout) {
        this.defaultExecutionStartToCloseTimeout = defaultExecutionStartToCloseTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLambdaRole")
    public String defaultLambdaRole;
    public RegisterWorkflowTypeInput withDefaultLambdaRole(String defaultLambdaRole) {
        this.defaultLambdaRole = defaultLambdaRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultTaskList")
    public TaskList defaultTaskList;
    public RegisterWorkflowTypeInput withDefaultTaskList(TaskList defaultTaskList) {
        this.defaultTaskList = defaultTaskList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultTaskPriority")
    public String defaultTaskPriority;
    public RegisterWorkflowTypeInput withDefaultTaskPriority(String defaultTaskPriority) {
        this.defaultTaskPriority = defaultTaskPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultTaskStartToCloseTimeout")
    public String defaultTaskStartToCloseTimeout;
    public RegisterWorkflowTypeInput withDefaultTaskStartToCloseTimeout(String defaultTaskStartToCloseTimeout) {
        this.defaultTaskStartToCloseTimeout = defaultTaskStartToCloseTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RegisterWorkflowTypeInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public RegisterWorkflowTypeInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RegisterWorkflowTypeInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public RegisterWorkflowTypeInput withVersion(String version) {
        this.version = version;
        return this;
    }
}