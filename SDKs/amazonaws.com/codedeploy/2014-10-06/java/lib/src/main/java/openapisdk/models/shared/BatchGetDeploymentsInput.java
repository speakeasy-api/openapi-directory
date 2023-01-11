package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetDeploymentsInput
 *  Represents the input of a <code>BatchGetDeployments</code> operation. 
**/
public class BatchGetDeploymentsInput {
    @JsonProperty("deploymentIds")
    public String[] deploymentIds;
    public BatchGetDeploymentsInput withDeploymentIds(String[] deploymentIds) {
        this.deploymentIds = deploymentIds;
        return this;
    }
}