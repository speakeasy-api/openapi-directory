package openapisdk.models.shared;


public enum FlowExecutionStatusEnum {
    RUNNING("RUNNING"),
    ABORTED("ABORTED"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private FlowExecutionStatusEnum(String value) {
        this.value = value;
    }
}
