package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDeploymentConfigOutput
 * Represents the output of a <code>GetDeploymentConfig</code> operation.
**/
public class GetDeploymentConfigOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentConfigInfo")
    public DeploymentConfigInfo deploymentConfigInfo;
    public GetDeploymentConfigOutput withDeploymentConfigInfo(DeploymentConfigInfo deploymentConfigInfo) {
        this.deploymentConfigInfo = deploymentConfigInfo;
        return this;
    }
}