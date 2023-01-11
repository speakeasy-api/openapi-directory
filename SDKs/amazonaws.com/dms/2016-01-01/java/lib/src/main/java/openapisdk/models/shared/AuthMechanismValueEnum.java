package openapisdk.models.shared;


public enum AuthMechanismValueEnum {
    DEFAULT_("default"),
    MONGODB_CR("mongodb_cr"),
    SCRAM_SHA1("scram_sha_1");

    public final String value;

    private AuthMechanismValueEnum(String value) {
        this.value = value;
    }
}
