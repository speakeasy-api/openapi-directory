package openapisdk.models.shared;


public enum EncryptionAlgorithmSpecEnum {
    SYMMETRIC_DEFAULT("SYMMETRIC_DEFAULT"),
    RSAES_OAEP_SHA1("RSAES_OAEP_SHA_1"),
    RSAES_OAEP_SHA256("RSAES_OAEP_SHA_256");

    public final String value;

    private EncryptionAlgorithmSpecEnum(String value) {
        this.value = value;
    }
}
