package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeploymentStyle
 * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
**/
public class DeploymentStyle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentOption")
    public DeploymentOptionEnum deploymentOption;
    public DeploymentStyle withDeploymentOption(DeploymentOptionEnum deploymentOption) {
        this.deploymentOption = deploymentOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentType")
    public DeploymentTypeEnum deploymentType;
    public DeploymentStyle withDeploymentType(DeploymentTypeEnum deploymentType) {
        this.deploymentType = deploymentType;
        return this;
    }
}