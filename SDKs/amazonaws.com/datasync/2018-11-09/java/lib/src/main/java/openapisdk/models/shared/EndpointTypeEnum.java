package openapisdk.models.shared;


public enum EndpointTypeEnum {
    PUBLIC_("PUBLIC"),
    PRIVATE_LINK("PRIVATE_LINK"),
    FIPS("FIPS");

    public final String value;

    private EndpointTypeEnum(String value) {
        this.value = value;
    }
}
