package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFunctionDefinitionVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultConfig")
    public CreateFunctionDefinitionVersionRequestBodyDefaultConfig defaultConfig;
    public CreateFunctionDefinitionVersionRequestBody withDefaultConfig(CreateFunctionDefinitionVersionRequestBodyDefaultConfig defaultConfig) {
        this.defaultConfig = defaultConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Functions")
    public openapisdk.models.shared.Function[] functions;
    public CreateFunctionDefinitionVersionRequestBody withFunctions(openapisdk.models.shared.Function[] functions) {
        this.functions = functions;
        return this;
    }
}