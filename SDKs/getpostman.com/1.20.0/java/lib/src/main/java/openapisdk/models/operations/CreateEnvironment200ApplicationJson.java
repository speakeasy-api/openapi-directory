package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEnvironment200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public CreateEnvironment200ApplicationJsonEnvironment environment;
    public CreateEnvironment200ApplicationJson withEnvironment(CreateEnvironment200ApplicationJsonEnvironment environment) {
        this.environment = environment;
        return this;
    }
}