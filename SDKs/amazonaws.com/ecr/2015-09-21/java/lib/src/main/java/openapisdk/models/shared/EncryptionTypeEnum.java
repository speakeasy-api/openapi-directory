package openapisdk.models.shared;


public enum EncryptionTypeEnum {
    AES256("AES256"),
    KMS("KMS");

    public final String value;

    private EncryptionTypeEnum(String value) {
        this.value = value;
    }
}
