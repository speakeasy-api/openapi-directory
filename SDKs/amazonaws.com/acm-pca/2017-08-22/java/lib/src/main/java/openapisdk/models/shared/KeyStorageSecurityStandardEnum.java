package openapisdk.models.shared;


public enum KeyStorageSecurityStandardEnum {
    FIPS1402_LEVEL2_OR_HIGHER("FIPS_140_2_LEVEL_2_OR_HIGHER"),
    FIPS1402_LEVEL3_OR_HIGHER("FIPS_140_2_LEVEL_3_OR_HIGHER");

    public final String value;

    private KeyStorageSecurityStandardEnum(String value) {
        this.value = value;
    }
}
