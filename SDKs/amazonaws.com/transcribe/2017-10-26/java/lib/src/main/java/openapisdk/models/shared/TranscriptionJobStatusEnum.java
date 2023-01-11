package openapisdk.models.shared;


public enum TranscriptionJobStatusEnum {
    QUEUED("QUEUED"),
    IN_PROGRESS("IN_PROGRESS"),
    FAILED("FAILED"),
    COMPLETED("COMPLETED");

    public final String value;

    private TranscriptionJobStatusEnum(String value) {
        this.value = value;
    }
}
