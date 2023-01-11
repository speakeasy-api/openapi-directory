package openapisdk.models.shared;


public enum IdentityProviderTypeTypeEnum {
    SAML("SAML"),
    FACEBOOK("Facebook"),
    GOOGLE("Google"),
    LOGIN_WITH_AMAZON("LoginWithAmazon"),
    SIGN_IN_WITH_APPLE("SignInWithApple"),
    OIDC("OIDC");

    public final String value;

    private IdentityProviderTypeTypeEnum(String value) {
        this.value = value;
    }
}
