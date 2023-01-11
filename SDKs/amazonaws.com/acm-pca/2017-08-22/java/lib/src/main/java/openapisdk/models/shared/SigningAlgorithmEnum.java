package openapisdk.models.shared;


public enum SigningAlgorithmEnum {
    SHA256_WITHECDSA("SHA256WITHECDSA"),
    SHA384_WITHECDSA("SHA384WITHECDSA"),
    SHA512_WITHECDSA("SHA512WITHECDSA"),
    SHA256_WITHRSA("SHA256WITHRSA"),
    SHA384_WITHRSA("SHA384WITHRSA"),
    SHA512_WITHRSA("SHA512WITHRSA");

    public final String value;

    private SigningAlgorithmEnum(String value) {
        this.value = value;
    }
}
