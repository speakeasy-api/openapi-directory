package openapisdk.models.shared;


public enum ExecutionStateEnum {
    QUEUED("QUEUED"),
    IN_PROGRESS("IN_PROGRESS"),
    CANCELED("CANCELED"),
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED"),
    REJECTED("REJECTED"),
    TIMED_OUT("TIMED_OUT");

    public final String value;

    private ExecutionStateEnum(String value) {
        this.value = value;
    }
}
