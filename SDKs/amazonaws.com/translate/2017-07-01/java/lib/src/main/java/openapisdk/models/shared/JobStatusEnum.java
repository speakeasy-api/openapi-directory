package openapisdk.models.shared;


public enum JobStatusEnum {
    SUBMITTED("SUBMITTED"),
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    COMPLETED_WITH_ERROR("COMPLETED_WITH_ERROR"),
    FAILED("FAILED"),
    STOP_REQUESTED("STOP_REQUESTED"),
    STOPPED("STOPPED");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
