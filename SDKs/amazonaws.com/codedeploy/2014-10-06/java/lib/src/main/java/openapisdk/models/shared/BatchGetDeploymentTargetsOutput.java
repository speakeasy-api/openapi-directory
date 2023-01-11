package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetDeploymentTargetsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentTargets")
    public DeploymentTarget[] deploymentTargets;
    public BatchGetDeploymentTargetsOutput withDeploymentTargets(DeploymentTarget[] deploymentTargets) {
        this.deploymentTargets = deploymentTargets;
        return this;
    }
}