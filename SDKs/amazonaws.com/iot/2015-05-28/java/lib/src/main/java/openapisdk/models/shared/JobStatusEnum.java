package openapisdk.models.shared;


public enum JobStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    CANCELED("CANCELED"),
    COMPLETED("COMPLETED"),
    DELETION_IN_PROGRESS("DELETION_IN_PROGRESS");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
