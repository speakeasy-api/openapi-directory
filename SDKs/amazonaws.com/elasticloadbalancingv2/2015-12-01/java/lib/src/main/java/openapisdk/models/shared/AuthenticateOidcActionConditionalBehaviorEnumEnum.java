package openapisdk.models.shared;


public enum AuthenticateOidcActionConditionalBehaviorEnumEnum {
    DENY("deny"),
    ALLOW("allow"),
    AUTHENTICATE("authenticate");

    public final String value;

    private AuthenticateOidcActionConditionalBehaviorEnumEnum(String value) {
        this.value = value;
    }
}
