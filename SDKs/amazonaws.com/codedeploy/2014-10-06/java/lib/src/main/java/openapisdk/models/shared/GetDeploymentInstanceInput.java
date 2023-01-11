package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDeploymentInstanceInput
 *  Represents the input of a <code>GetDeploymentInstance</code> operation. 
**/
public class GetDeploymentInstanceInput {
    @JsonProperty("deploymentId")
    public String deploymentId;
    public GetDeploymentInstanceInput withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonProperty("instanceId")
    public String instanceId;
    public GetDeploymentInstanceInput withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}