package openapisdk.models.shared;


public enum JobStatusEnum {
    CREATED("Created"),
    QUEUED("Queued"),
    DISPATCHED("Dispatched"),
    IN_PROGRESS("InProgress"),
    TIMED_OUT("TimedOut"),
    SUCCEEDED("Succeeded"),
    FAILED("Failed");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
