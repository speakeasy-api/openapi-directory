package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFunctionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functionConfiguration")
    public FunctionConfiguration functionConfiguration;
    public UpdateFunctionResponse withFunctionConfiguration(FunctionConfiguration functionConfiguration) {
        this.functionConfiguration = functionConfiguration;
        return this;
    }
}