package openapisdk.models.shared;


public enum RecordStatusEnum {
    CREATED("CREATED"),
    IN_PROGRESS("IN_PROGRESS"),
    IN_PROGRESS_IN_ERROR("IN_PROGRESS_IN_ERROR"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private RecordStatusEnum(String value) {
        this.value = value;
    }
}
