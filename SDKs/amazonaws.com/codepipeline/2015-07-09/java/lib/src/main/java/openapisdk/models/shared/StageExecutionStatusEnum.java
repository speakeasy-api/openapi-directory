package openapisdk.models.shared;


public enum StageExecutionStatusEnum {
    CANCELLED("Cancelled"),
    IN_PROGRESS("InProgress"),
    FAILED("Failed"),
    STOPPED("Stopped"),
    STOPPING("Stopping"),
    SUCCEEDED("Succeeded");

    public final String value;

    private StageExecutionStatusEnum(String value) {
        this.value = value;
    }
}
