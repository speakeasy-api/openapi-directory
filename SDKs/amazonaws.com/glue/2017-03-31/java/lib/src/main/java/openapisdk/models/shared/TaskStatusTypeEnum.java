package openapisdk.models.shared;


public enum TaskStatusTypeEnum {
    STARTING("STARTING"),
    RUNNING("RUNNING"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    TIMEOUT("TIMEOUT");

    public final String value;

    private TaskStatusTypeEnum(String value) {
        this.value = value;
    }
}
