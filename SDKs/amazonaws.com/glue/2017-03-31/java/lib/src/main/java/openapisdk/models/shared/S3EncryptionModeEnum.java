package openapisdk.models.shared;


public enum S3EncryptionModeEnum {
    DISABLED("DISABLED"),
    SSE_KMS("SSE-KMS"),
    SSE_S3("SSE-S3");

    public final String value;

    private S3EncryptionModeEnum(String value) {
        this.value = value;
    }
}
