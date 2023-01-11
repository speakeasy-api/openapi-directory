package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDeploymentConfigInput
 * Represents the input of a <code>GetDeploymentConfig</code> operation.
**/
public class GetDeploymentConfigInput {
    @JsonProperty("deploymentConfigName")
    public String deploymentConfigName;
    public GetDeploymentConfigInput withDeploymentConfigName(String deploymentConfigName) {
        this.deploymentConfigName = deploymentConfigName;
        return this;
    }
}