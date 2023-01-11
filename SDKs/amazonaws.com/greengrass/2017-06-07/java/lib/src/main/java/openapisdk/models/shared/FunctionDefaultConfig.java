package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FunctionDefaultConfig
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
**/
public class FunctionDefaultConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Execution")
    public FunctionDefaultExecutionConfig execution;
    public FunctionDefaultConfig withExecution(FunctionDefaultExecutionConfig execution) {
        this.execution = execution;
        return this;
    }
}