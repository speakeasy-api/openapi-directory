package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateEnvironmentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public UpdateEnvironmentRequestBodyEnvironment environment;
    public UpdateEnvironmentRequestBody withEnvironment(UpdateEnvironmentRequestBodyEnvironment environment) {
        this.environment = environment;
        return this;
    }
}