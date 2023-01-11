package openapisdk.models.shared;


public enum StatusTypeEnum {
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    FAULT("FAULT"),
    TIMED_OUT("TIMED_OUT"),
    IN_PROGRESS("IN_PROGRESS"),
    STOPPED("STOPPED");

    public final String value;

    private StatusTypeEnum(String value) {
        this.value = value;
    }
}
