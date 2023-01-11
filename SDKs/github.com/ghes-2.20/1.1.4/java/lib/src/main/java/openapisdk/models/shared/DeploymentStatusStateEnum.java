package openapisdk.models.shared;


public enum DeploymentStatusStateEnum {
    ERROR("error"),
    FAILURE("failure"),
    INACTIVE("inactive"),
    PENDING("pending"),
    SUCCESS("success"),
    QUEUED("queued"),
    IN_PROGRESS("in_progress");

    public final String value;

    private DeploymentStatusStateEnum(String value) {
        this.value = value;
    }
}
