package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEnvironmentRelations200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public GetEnvironmentRelations200ApplicationJsonEnvironment[] environment;
    public GetEnvironmentRelations200ApplicationJson withEnvironment(GetEnvironmentRelations200ApplicationJsonEnvironment[] environment) {
        this.environment = environment;
        return this;
    }
}