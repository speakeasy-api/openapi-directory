package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDeploymentGroupOutput
 * Represents the output of a <code>GetDeploymentGroup</code> operation.
**/
public class GetDeploymentGroupOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentGroupInfo")
    public DeploymentGroupInfo deploymentGroupInfo;
    public GetDeploymentGroupOutput withDeploymentGroupInfo(DeploymentGroupInfo deploymentGroupInfo) {
        this.deploymentGroupInfo = deploymentGroupInfo;
        return this;
    }
}