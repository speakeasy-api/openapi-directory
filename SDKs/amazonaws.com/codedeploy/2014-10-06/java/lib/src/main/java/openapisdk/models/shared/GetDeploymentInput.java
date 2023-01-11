package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDeploymentInput
 * Represents the input of a <code>GetDeployment</code> operation.
**/
public class GetDeploymentInput {
    @JsonProperty("deploymentId")
    public String deploymentId;
    public GetDeploymentInput withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}