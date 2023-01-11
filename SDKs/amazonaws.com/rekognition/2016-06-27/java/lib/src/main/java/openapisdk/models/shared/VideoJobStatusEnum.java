package openapisdk.models.shared;


public enum VideoJobStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private VideoJobStatusEnum(String value) {
        this.value = value;
    }
}
