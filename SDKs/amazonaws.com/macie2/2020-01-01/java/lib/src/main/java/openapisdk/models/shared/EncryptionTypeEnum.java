package openapisdk.models.shared;


public enum EncryptionTypeEnum {
    NONE("NONE"),
    AES256("AES256"),
    AWS_KMS("aws:kms"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private EncryptionTypeEnum(String value) {
        this.value = value;
    }
}
