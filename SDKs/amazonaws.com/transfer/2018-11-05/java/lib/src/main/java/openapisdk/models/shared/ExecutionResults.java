package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionResults
 * Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution.
**/
public class ExecutionResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnExceptionSteps")
    public ExecutionStepResult[] onExceptionSteps;
    public ExecutionResults withOnExceptionSteps(ExecutionStepResult[] onExceptionSteps) {
        this.onExceptionSteps = onExceptionSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Steps")
    public ExecutionStepResult[] steps;
    public ExecutionResults withSteps(ExecutionStepResult[] steps) {
        this.steps = steps;
        return this;
    }
}