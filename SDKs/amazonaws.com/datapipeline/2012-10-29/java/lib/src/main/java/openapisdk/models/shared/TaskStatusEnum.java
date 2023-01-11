package openapisdk.models.shared;


public enum TaskStatusEnum {
    FINISHED("FINISHED"),
    FAILED("FAILED"),
    FALSE("FALSE");

    public final String value;

    private TaskStatusEnum(String value) {
        this.value = value;
    }
}
