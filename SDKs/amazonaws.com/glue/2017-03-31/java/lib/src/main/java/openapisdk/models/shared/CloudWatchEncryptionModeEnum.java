package openapisdk.models.shared;


public enum CloudWatchEncryptionModeEnum {
    DISABLED("DISABLED"),
    SSE_KMS("SSE-KMS");

    public final String value;

    private CloudWatchEncryptionModeEnum(String value) {
        this.value = value;
    }
}
