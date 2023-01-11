package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelEnvironmentDeploymentOutput {
    @JsonProperty("environment")
    public Environment environment;
    public CancelEnvironmentDeploymentOutput withEnvironment(Environment environment) {
        this.environment = environment;
        return this;
    }
}