package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFunctionConfigurationRequestBodyEnvironment
 * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration. 
**/
public class UpdateFunctionConfigurationRequestBodyEnvironment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Variables")
    public java.util.Map<String, String> variables;
    public UpdateFunctionConfigurationRequestBodyEnvironment withVariables(java.util.Map<String, String> variables) {
        this.variables = variables;
        return this;
    }
}