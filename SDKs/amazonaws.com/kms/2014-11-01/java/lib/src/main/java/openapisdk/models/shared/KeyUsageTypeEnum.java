package openapisdk.models.shared;


public enum KeyUsageTypeEnum {
    SIGN_VERIFY("SIGN_VERIFY"),
    ENCRYPT_DECRYPT("ENCRYPT_DECRYPT");

    public final String value;

    private KeyUsageTypeEnum(String value) {
        this.value = value;
    }
}
