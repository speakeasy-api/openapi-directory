package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeploymentTarget
 *  Information about the deployment target. 
**/
public class DeploymentTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudFormationTarget")
    public CloudFormationTarget cloudFormationTarget;
    public DeploymentTarget withCloudFormationTarget(CloudFormationTarget cloudFormationTarget) {
        this.cloudFormationTarget = cloudFormationTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentTargetType")
    public DeploymentTargetTypeEnum deploymentTargetType;
    public DeploymentTarget withDeploymentTargetType(DeploymentTargetTypeEnum deploymentTargetType) {
        this.deploymentTargetType = deploymentTargetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecsTarget")
    public EcsTarget ecsTarget;
    public DeploymentTarget withEcsTarget(EcsTarget ecsTarget) {
        this.ecsTarget = ecsTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTarget")
    public InstanceTarget instanceTarget;
    public DeploymentTarget withInstanceTarget(InstanceTarget instanceTarget) {
        this.instanceTarget = instanceTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaTarget")
    public LambdaTarget lambdaTarget;
    public DeploymentTarget withLambdaTarget(LambdaTarget lambdaTarget) {
        this.lambdaTarget = lambdaTarget;
        return this;
    }
}