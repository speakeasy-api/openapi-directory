package openapisdk.models.shared;


public enum ExecutionStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    EXCEPTION("EXCEPTION"),
    HANDLING_EXCEPTION("HANDLING_EXCEPTION");

    public final String value;

    private ExecutionStatusEnum(String value) {
        this.value = value;
    }
}
