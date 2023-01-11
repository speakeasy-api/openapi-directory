package openapisdk.models.shared;


public enum JobStatusEnum {
    PENDING("PENDING"),
    PROVISIONING("PROVISIONING"),
    RUNNING("RUNNING"),
    FAILED("FAILED"),
    SUCCEED("SUCCEED"),
    CANCELLING("CANCELLING"),
    CANCELLED("CANCELLED");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
