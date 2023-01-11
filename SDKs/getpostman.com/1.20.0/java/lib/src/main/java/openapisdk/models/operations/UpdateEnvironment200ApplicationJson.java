package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateEnvironment200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public UpdateEnvironment200ApplicationJsonEnvironment environment;
    public UpdateEnvironment200ApplicationJson withEnvironment(UpdateEnvironment200ApplicationJsonEnvironment environment) {
        this.environment = environment;
        return this;
    }
}