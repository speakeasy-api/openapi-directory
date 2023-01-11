package openapisdk.models.shared;


public enum JobStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    PARTIAL_SUCCESS("PARTIAL_SUCCESS");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
