package openapisdk.models.shared;


public enum IngestionJobStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED");

    public final String value;

    private IngestionJobStatusEnum(String value) {
        this.value = value;
    }
}
