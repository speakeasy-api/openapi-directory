package openapisdk.models.shared;


public enum DeploymentStatusEnum {
    PENDING("Pending"),
    PREPARING("Preparing"),
    IN_PROGRESS("InProgress"),
    FAILED("Failed"),
    SUCCEEDED("Succeeded"),
    CANCELED("Canceled");

    public final String value;

    private DeploymentStatusEnum(String value) {
        this.value = value;
    }
}
