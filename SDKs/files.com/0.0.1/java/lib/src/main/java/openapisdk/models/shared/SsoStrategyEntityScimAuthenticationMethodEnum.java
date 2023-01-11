package openapisdk.models.shared;


public enum SsoStrategyEntityScimAuthenticationMethodEnum {
    NONE("none"),
    BASIC("basic"),
    TOKEN("token");

    public final String value;

    private SsoStrategyEntityScimAuthenticationMethodEnum(String value) {
        this.value = value;
    }
}
