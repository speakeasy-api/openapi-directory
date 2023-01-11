package openapisdk.models.shared;


public enum UserEntityAuthenticationMethodEnum {
    PASSWORD("password"),
    UNUSED_FORMER_LDAP("unused_former_ldap"),
    SSO("sso"),
    NONE("none"),
    EMAIL_SIGNUP("email_signup");

    public final String value;

    private UserEntityAuthenticationMethodEnum(String value) {
        this.value = value;
    }
}
