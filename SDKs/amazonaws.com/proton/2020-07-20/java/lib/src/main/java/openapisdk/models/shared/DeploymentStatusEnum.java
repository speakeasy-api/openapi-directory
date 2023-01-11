package openapisdk.models.shared;


public enum DeploymentStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED"),
    DELETE_IN_PROGRESS("DELETE_IN_PROGRESS"),
    DELETE_FAILED("DELETE_FAILED"),
    DELETE_COMPLETE("DELETE_COMPLETE"),
    CANCELLING("CANCELLING"),
    CANCELLED("CANCELLED");

    public final String value;

    private DeploymentStatusEnum(String value) {
        this.value = value;
    }
}
