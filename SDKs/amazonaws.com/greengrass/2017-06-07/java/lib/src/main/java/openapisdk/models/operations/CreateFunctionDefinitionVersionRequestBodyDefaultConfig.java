package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateFunctionDefinitionVersionRequestBodyDefaultConfig
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
**/
public class CreateFunctionDefinitionVersionRequestBodyDefaultConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Execution")
    public openapisdk.models.shared.FunctionDefaultExecutionConfig execution;
    public CreateFunctionDefinitionVersionRequestBodyDefaultConfig withExecution(openapisdk.models.shared.FunctionDefaultExecutionConfig execution) {
        this.execution = execution;
        return this;
    }
}