package openapisdk.models.shared;


public enum EncryptionTypeEnum {
    NONE("NONE"),
    KMS("KMS");

    public final String value;

    private EncryptionTypeEnum(String value) {
        this.value = value;
    }
}
