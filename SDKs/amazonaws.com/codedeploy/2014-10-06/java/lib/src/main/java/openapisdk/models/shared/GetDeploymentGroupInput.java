package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDeploymentGroupInput
 * Represents the input of a <code>GetDeploymentGroup</code> operation.
**/
public class GetDeploymentGroupInput {
    @JsonProperty("applicationName")
    public String applicationName;
    public GetDeploymentGroupInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("deploymentGroupName")
    public String deploymentGroupName;
    public GetDeploymentGroupInput withDeploymentGroupName(String deploymentGroupName) {
        this.deploymentGroupName = deploymentGroupName;
        return this;
    }
}