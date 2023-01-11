package openapisdk.models.shared;


public enum DeploymentTargetTypeEnum {
    INSTANCE_TARGET("InstanceTarget"),
    LAMBDA_TARGET("LambdaTarget"),
    ECS_TARGET("ECSTarget"),
    CLOUD_FORMATION_TARGET("CloudFormationTarget");

    public final String value;

    private DeploymentTargetTypeEnum(String value) {
        this.value = value;
    }
}
