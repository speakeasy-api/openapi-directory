package openapisdk.models.shared;


public enum AlgorithmSpecEnum {
    RSAES_PKCS1_V15("RSAES_PKCS1_V1_5"),
    RSAES_OAEP_SHA1("RSAES_OAEP_SHA_1"),
    RSAES_OAEP_SHA256("RSAES_OAEP_SHA_256");

    public final String value;

    private AlgorithmSpecEnum(String value) {
        this.value = value;
    }
}
