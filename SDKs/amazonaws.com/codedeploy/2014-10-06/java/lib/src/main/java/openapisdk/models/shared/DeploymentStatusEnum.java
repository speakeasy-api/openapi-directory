package openapisdk.models.shared;


public enum DeploymentStatusEnum {
    CREATED("Created"),
    QUEUED("Queued"),
    IN_PROGRESS("InProgress"),
    BAKING("Baking"),
    SUCCEEDED("Succeeded"),
    FAILED("Failed"),
    STOPPED("Stopped"),
    READY("Ready");

    public final String value;

    private DeploymentStatusEnum(String value) {
        this.value = value;
    }
}
