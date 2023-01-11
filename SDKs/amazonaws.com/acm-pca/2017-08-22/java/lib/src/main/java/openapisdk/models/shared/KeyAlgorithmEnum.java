package openapisdk.models.shared;


public enum KeyAlgorithmEnum {
    RSA2048("RSA_2048"),
    RSA4096("RSA_4096"),
    EC_PRIME256V1("EC_prime256v1"),
    EC_SECP384R1("EC_secp384r1");

    public final String value;

    private KeyAlgorithmEnum(String value) {
        this.value = value;
    }
}
