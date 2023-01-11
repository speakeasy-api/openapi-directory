package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateEnvironmentOutput {
    @JsonProperty("environment")
    public Environment environment;
    public CreateEnvironmentOutput withEnvironment(Environment environment) {
        this.environment = environment;
        return this;
    }
}