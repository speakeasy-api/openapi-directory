package openapisdk.models.shared;


public enum JobExecutionStatusEnum {
    QUEUED("QUEUED"),
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    TIMED_OUT("TIMED_OUT"),
    REJECTED("REJECTED"),
    REMOVED("REMOVED"),
    CANCELED("CANCELED");

    public final String value;

    private JobExecutionStatusEnum(String value) {
        this.value = value;
    }
}
