package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDeploymentOutput
 * Represents the output of a <code>GetDeployment</code> operation.
**/
public class GetDeploymentOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentInfo")
    public DeploymentInfo deploymentInfo;
    public GetDeploymentOutput withDeploymentInfo(DeploymentInfo deploymentInfo) {
        this.deploymentInfo = deploymentInfo;
        return this;
    }
}