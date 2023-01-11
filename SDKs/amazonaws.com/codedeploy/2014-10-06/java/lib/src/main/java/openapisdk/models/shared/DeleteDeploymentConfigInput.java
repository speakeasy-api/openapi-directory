package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteDeploymentConfigInput
 * Represents the input of a <code>DeleteDeploymentConfig</code> operation.
**/
public class DeleteDeploymentConfigInput {
    @JsonProperty("deploymentConfigName")
    public String deploymentConfigName;
    public DeleteDeploymentConfigInput withDeploymentConfigName(String deploymentConfigName) {
        this.deploymentConfigName = deploymentConfigName;
        return this;
    }
}