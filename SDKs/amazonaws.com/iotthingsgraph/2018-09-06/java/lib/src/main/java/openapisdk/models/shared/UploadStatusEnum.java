package openapisdk.models.shared;


public enum UploadStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private UploadStatusEnum(String value) {
        this.value = value;
    }
}
