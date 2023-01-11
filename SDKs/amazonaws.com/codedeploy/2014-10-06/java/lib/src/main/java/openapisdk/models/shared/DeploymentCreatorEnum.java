package openapisdk.models.shared;


public enum DeploymentCreatorEnum {
    USER("user"),
    AUTOSCALING("autoscaling"),
    CODE_DEPLOY_ROLLBACK("codeDeployRollback"),
    CODE_DEPLOY("CodeDeploy"),
    CODE_DEPLOY_AUTO_UPDATE("CodeDeployAutoUpdate"),
    CLOUD_FORMATION("CloudFormation"),
    CLOUD_FORMATION_ROLLBACK("CloudFormationRollback");

    public final String value;

    private DeploymentCreatorEnum(String value) {
        this.value = value;
    }
}
