package openapisdk.models.shared;


public enum DeploymentReadyActionEnum {
    CONTINUE_DEPLOYMENT("CONTINUE_DEPLOYMENT"),
    STOP_DEPLOYMENT("STOP_DEPLOYMENT");

    public final String value;

    private DeploymentReadyActionEnum(String value) {
        this.value = value;
    }
}
