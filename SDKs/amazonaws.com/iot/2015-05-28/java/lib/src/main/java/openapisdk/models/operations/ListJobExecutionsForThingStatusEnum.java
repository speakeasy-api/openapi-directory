package openapisdk.models.operations;


public enum ListJobExecutionsForThingStatusEnum {
    QUEUED("QUEUED"),
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    TIMED_OUT("TIMED_OUT"),
    REJECTED("REJECTED"),
    REMOVED("REMOVED"),
    CANCELED("CANCELED");

    public final String value;

    private ListJobExecutionsForThingStatusEnum(String value) {
        this.value = value;
    }
}
