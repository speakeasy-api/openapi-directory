package openapisdk.models.shared;


public enum AuthenticationTypeEnum {
    API("API"),
    SAML("SAML"),
    USERPOOL("USERPOOL");

    public final String value;

    private AuthenticationTypeEnum(String value) {
        this.value = value;
    }
}
