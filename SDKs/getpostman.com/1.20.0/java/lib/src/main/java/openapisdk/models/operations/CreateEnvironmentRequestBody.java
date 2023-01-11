package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEnvironmentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public CreateEnvironmentRequestBodyEnvironment environment;
    public CreateEnvironmentRequestBody withEnvironment(CreateEnvironmentRequestBodyEnvironment environment) {
        this.environment = environment;
        return this;
    }
}