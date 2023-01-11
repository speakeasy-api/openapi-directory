package openapisdk.models.shared;


public enum EncryptionTypeEnum {
    AWS_KMS("aws:kms"),
    AES256("AES256");

    public final String value;

    private EncryptionTypeEnum(String value) {
        this.value = value;
    }
}
