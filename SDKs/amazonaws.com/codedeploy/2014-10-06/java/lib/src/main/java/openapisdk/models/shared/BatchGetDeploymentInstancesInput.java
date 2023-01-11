package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetDeploymentInstancesInput
 *  Represents the input of a <code>BatchGetDeploymentInstances</code> operation. 
**/
public class BatchGetDeploymentInstancesInput {
    @JsonProperty("deploymentId")
    public String deploymentId;
    public BatchGetDeploymentInstancesInput withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonProperty("instanceIds")
    public String[] instanceIds;
    public BatchGetDeploymentInstancesInput withInstanceIds(String[] instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
}