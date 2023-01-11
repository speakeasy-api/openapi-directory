package openapisdk.models.shared;


public enum DeploymentRolloutStateEnum {
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    IN_PROGRESS("IN_PROGRESS");

    public final String value;

    private DeploymentRolloutStateEnum(String value) {
        this.value = value;
    }
}
