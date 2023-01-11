package openapisdk.models.shared;


public enum DeploymentControllerTypeEnum {
    ECS("ECS"),
    CODE_DEPLOY("CODE_DEPLOY"),
    EXTERNAL("EXTERNAL");

    public final String value;

    private DeploymentControllerTypeEnum(String value) {
        this.value = value;
    }
}
