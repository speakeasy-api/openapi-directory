package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEnvironmentOutput {
    @JsonProperty("environment")
    public Environment environment;
    public UpdateEnvironmentOutput withEnvironment(Environment environment) {
        this.environment = environment;
        return this;
    }
}