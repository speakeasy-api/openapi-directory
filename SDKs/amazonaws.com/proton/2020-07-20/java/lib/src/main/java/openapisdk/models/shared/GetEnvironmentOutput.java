package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEnvironmentOutput {
    @JsonProperty("environment")
    public Environment environment;
    public GetEnvironmentOutput withEnvironment(Environment environment) {
        this.environment = environment;
        return this;
    }
}