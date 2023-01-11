package openapisdk.models.operations;


public enum CreateDeploymentRequestBodyDeploymentTypeEnum {
    NEW_DEPLOYMENT("NewDeployment"),
    REDEPLOYMENT("Redeployment"),
    RESET_DEPLOYMENT("ResetDeployment"),
    FORCE_RESET_DEPLOYMENT("ForceResetDeployment");

    public final String value;

    private CreateDeploymentRequestBodyDeploymentTypeEnum(String value) {
        this.value = value;
    }
}
