package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteDeploymentGroupInput
 * Represents the input of a <code>DeleteDeploymentGroup</code> operation.
**/
public class DeleteDeploymentGroupInput {
    @JsonProperty("applicationName")
    public String applicationName;
    public DeleteDeploymentGroupInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("deploymentGroupName")
    public String deploymentGroupName;
    public DeleteDeploymentGroupInput withDeploymentGroupName(String deploymentGroupName) {
        this.deploymentGroupName = deploymentGroupName;
        return this;
    }
}