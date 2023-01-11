package openapisdk.models.shared;


public enum DataKeyPairSpecEnum {
    RSA2048("RSA_2048"),
    RSA3072("RSA_3072"),
    RSA4096("RSA_4096"),
    ECC_NIST_P256("ECC_NIST_P256"),
    ECC_NIST_P384("ECC_NIST_P384"),
    ECC_NIST_P521("ECC_NIST_P521"),
    ECC_SECG_P256_K1("ECC_SECG_P256K1");

    public final String value;

    private DataKeyPairSpecEnum(String value) {
        this.value = value;
    }
}
