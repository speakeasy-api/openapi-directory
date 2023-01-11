package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDeploymentTargetOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentTarget")
    public DeploymentTarget deploymentTarget;
    public GetDeploymentTargetOutput withDeploymentTarget(DeploymentTarget deploymentTarget) {
        this.deploymentTarget = deploymentTarget;
        return this;
    }
}