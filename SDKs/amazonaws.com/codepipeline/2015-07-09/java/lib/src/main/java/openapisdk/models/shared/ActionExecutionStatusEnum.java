package openapisdk.models.shared;


public enum ActionExecutionStatusEnum {
    IN_PROGRESS("InProgress"),
    ABANDONED("Abandoned"),
    SUCCEEDED("Succeeded"),
    FAILED("Failed");

    public final String value;

    private ActionExecutionStatusEnum(String value) {
        this.value = value;
    }
}
