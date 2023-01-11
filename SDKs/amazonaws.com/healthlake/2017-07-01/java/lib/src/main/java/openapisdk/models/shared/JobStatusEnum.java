package openapisdk.models.shared;


public enum JobStatusEnum {
    SUBMITTED("SUBMITTED"),
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED_WITH_ERRORS("COMPLETED_WITH_ERRORS"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
