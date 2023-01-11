package openapisdk.models.shared;


public enum FailureReasonEnum {
    REQUEST_TIMED_OUT("REQUEST_TIMED_OUT"),
    UNSUPPORTED_ALGORITHM("UNSUPPORTED_ALGORITHM"),
    OTHER("OTHER");

    public final String value;

    private FailureReasonEnum(String value) {
        this.value = value;
    }
}
