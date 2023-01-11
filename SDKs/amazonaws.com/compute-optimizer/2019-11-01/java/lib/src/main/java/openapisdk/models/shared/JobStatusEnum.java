package openapisdk.models.shared;


public enum JobStatusEnum {
    QUEUED("Queued"),
    IN_PROGRESS("InProgress"),
    COMPLETE("Complete"),
    FAILED("Failed");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
