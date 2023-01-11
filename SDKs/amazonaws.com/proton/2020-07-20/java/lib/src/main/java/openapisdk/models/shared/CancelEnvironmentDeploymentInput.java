package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelEnvironmentDeploymentInput {
    @JsonProperty("environmentName")
    public String environmentName;
    public CancelEnvironmentDeploymentInput withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
}