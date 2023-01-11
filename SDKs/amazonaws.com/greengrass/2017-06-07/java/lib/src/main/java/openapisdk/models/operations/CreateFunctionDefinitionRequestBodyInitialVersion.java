package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateFunctionDefinitionRequestBodyInitialVersion
 * Information about a function definition version.
**/
public class CreateFunctionDefinitionRequestBodyInitialVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultConfig")
    public openapisdk.models.shared.FunctionDefaultConfig defaultConfig;
    public CreateFunctionDefinitionRequestBodyInitialVersion withDefaultConfig(openapisdk.models.shared.FunctionDefaultConfig defaultConfig) {
        this.defaultConfig = defaultConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Functions")
    public openapisdk.models.shared.Function[] functions;
    public CreateFunctionDefinitionRequestBodyInitialVersion withFunctions(openapisdk.models.shared.Function[] functions) {
        this.functions = functions;
        return this;
    }
}