package openapisdk.models.shared;


public enum InstanceRefreshStatusEnum {
    PENDING("Pending"),
    IN_PROGRESS("InProgress"),
    SUCCESSFUL("Successful"),
    FAILED("Failed"),
    CANCELLING("Cancelling"),
    CANCELLED("Cancelled");

    public final String value;

    private InstanceRefreshStatusEnum(String value) {
        this.value = value;
    }
}
