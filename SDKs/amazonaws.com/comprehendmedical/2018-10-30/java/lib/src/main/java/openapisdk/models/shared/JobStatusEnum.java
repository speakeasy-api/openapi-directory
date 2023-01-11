package openapisdk.models.shared;


public enum JobStatusEnum {
    SUBMITTED("SUBMITTED"),
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    PARTIAL_SUCCESS("PARTIAL_SUCCESS"),
    FAILED("FAILED"),
    STOP_REQUESTED("STOP_REQUESTED"),
    STOPPED("STOPPED");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
