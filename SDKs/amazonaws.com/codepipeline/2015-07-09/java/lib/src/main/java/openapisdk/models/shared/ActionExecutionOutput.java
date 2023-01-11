package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionExecutionOutput
 * Output details listed for an action execution, such as the action execution result.
**/
public class ActionExecutionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionResult")
    public ActionExecutionResult executionResult;
    public ActionExecutionOutput withExecutionResult(ActionExecutionResult executionResult) {
        this.executionResult = executionResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputArtifacts")
    public ArtifactDetail[] outputArtifacts;
    public ActionExecutionOutput withOutputArtifacts(ArtifactDetail[] outputArtifacts) {
        this.outputArtifacts = outputArtifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputVariables")
    public java.util.Map<String, String> outputVariables;
    public ActionExecutionOutput withOutputVariables(java.util.Map<String, String> outputVariables) {
        this.outputVariables = outputVariables;
        return this;
    }
}