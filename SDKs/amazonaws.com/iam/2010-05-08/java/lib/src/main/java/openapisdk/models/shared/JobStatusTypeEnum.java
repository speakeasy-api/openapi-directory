package openapisdk.models.shared;


public enum JobStatusTypeEnum {
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED");

    public final String value;

    private JobStatusTypeEnum(String value) {
        this.value = value;
    }
}
