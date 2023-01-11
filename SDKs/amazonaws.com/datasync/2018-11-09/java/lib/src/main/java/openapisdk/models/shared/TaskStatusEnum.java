package openapisdk.models.shared;


public enum TaskStatusEnum {
    AVAILABLE("AVAILABLE"),
    CREATING("CREATING"),
    QUEUED("QUEUED"),
    RUNNING("RUNNING"),
    UNAVAILABLE("UNAVAILABLE");

    public final String value;

    private TaskStatusEnum(String value) {
        this.value = value;
    }
}
