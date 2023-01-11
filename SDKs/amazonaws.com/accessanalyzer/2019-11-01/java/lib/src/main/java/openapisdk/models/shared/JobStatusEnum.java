package openapisdk.models.shared;


public enum JobStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    CANCELED("CANCELED");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
