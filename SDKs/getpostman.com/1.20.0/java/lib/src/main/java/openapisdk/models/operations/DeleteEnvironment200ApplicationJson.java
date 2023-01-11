package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteEnvironment200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public DeleteEnvironment200ApplicationJsonEnvironment environment;
    public DeleteEnvironment200ApplicationJson withEnvironment(DeleteEnvironment200ApplicationJsonEnvironment environment) {
        this.environment = environment;
        return this;
    }
}