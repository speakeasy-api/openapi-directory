package openapisdk.models.shared;


public enum SigningAlgorithmSpecEnum {
    RSASSA_PSS_SHA256("RSASSA_PSS_SHA_256"),
    RSASSA_PSS_SHA384("RSASSA_PSS_SHA_384"),
    RSASSA_PSS_SHA512("RSASSA_PSS_SHA_512"),
    RSASSA_PKCS1_V15_SHA256("RSASSA_PKCS1_V1_5_SHA_256"),
    RSASSA_PKCS1_V15_SHA384("RSASSA_PKCS1_V1_5_SHA_384"),
    RSASSA_PKCS1_V15_SHA512("RSASSA_PKCS1_V1_5_SHA_512"),
    ECDSA_SHA256("ECDSA_SHA_256"),
    ECDSA_SHA384("ECDSA_SHA_384"),
    ECDSA_SHA512("ECDSA_SHA_512");

    public final String value;

    private SigningAlgorithmSpecEnum(String value) {
        this.value = value;
    }
}
