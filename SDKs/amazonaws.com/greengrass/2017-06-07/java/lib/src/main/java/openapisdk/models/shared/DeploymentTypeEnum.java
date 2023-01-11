package openapisdk.models.shared;


public enum DeploymentTypeEnum {
    NEW_DEPLOYMENT("NewDeployment"),
    REDEPLOYMENT("Redeployment"),
    RESET_DEPLOYMENT("ResetDeployment"),
    FORCE_RESET_DEPLOYMENT("ForceResetDeployment");

    public final String value;

    private DeploymentTypeEnum(String value) {
        this.value = value;
    }
}
