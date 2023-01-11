package openapisdk.models.shared;


public enum TaskStatusEnum {
    SCHEDULED("scheduled"),
    IN_PROGRESS("inProgress"),
    COMPLETED("completed"),
    FAILED("failed");

    public final String value;

    private TaskStatusEnum(String value) {
        this.value = value;
    }
}
