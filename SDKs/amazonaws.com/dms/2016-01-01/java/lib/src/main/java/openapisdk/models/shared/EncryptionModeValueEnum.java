package openapisdk.models.shared;


public enum EncryptionModeValueEnum {
    SSE_S3("sse-s3"),
    SSE_KMS("sse-kms");

    public final String value;

    private EncryptionModeValueEnum(String value) {
        this.value = value;
    }
}
