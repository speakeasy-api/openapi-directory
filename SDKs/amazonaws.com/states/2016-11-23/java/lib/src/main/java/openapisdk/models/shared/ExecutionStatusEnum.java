package openapisdk.models.shared;


public enum ExecutionStatusEnum {
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    TIMED_OUT("TIMED_OUT"),
    ABORTED("ABORTED");

    public final String value;

    private ExecutionStatusEnum(String value) {
        this.value = value;
    }
}
