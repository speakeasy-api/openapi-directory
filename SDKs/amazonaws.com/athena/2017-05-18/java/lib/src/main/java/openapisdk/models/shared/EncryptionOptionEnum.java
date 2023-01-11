package openapisdk.models.shared;


public enum EncryptionOptionEnum {
    SSE_S3("SSE_S3"),
    SSE_KMS("SSE_KMS"),
    CSE_KMS("CSE_KMS");

    public final String value;

    private EncryptionOptionEnum(String value) {
        this.value = value;
    }
}
