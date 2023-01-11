package openapisdk.models.shared;


public enum InferenceExecutionStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED");

    public final String value;

    private InferenceExecutionStatusEnum(String value) {
        this.value = value;
    }
}
