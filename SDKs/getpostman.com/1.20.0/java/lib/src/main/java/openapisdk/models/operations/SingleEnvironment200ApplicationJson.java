package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleEnvironment200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public SingleEnvironment200ApplicationJsonEnvironment environment;
    public SingleEnvironment200ApplicationJson withEnvironment(SingleEnvironment200ApplicationJsonEnvironment environment) {
        this.environment = environment;
        return this;
    }
}