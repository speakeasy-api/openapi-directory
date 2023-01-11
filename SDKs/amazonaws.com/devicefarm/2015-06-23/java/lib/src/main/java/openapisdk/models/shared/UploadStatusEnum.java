package openapisdk.models.shared;


public enum UploadStatusEnum {
    INITIALIZED("INITIALIZED"),
    PROCESSING("PROCESSING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private UploadStatusEnum(String value) {
        this.value = value;
    }
}
