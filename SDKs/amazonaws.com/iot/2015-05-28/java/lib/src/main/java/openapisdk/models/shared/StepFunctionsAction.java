package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StepFunctionsAction
 * Starts execution of a Step Functions state machine.
**/
public class StepFunctionsAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionNamePrefix")
    public String executionNamePrefix;
    public StepFunctionsAction withExecutionNamePrefix(String executionNamePrefix) {
        this.executionNamePrefix = executionNamePrefix;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public StepFunctionsAction withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("stateMachineName")
    public String stateMachineName;
    public StepFunctionsAction withStateMachineName(String stateMachineName) {
        this.stateMachineName = stateMachineName;
        return this;
    }
}