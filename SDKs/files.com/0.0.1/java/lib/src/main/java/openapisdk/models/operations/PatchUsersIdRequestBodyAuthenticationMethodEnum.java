package openapisdk.models.operations;


public enum PatchUsersIdRequestBodyAuthenticationMethodEnum {
    PASSWORD("password"),
    UNUSED_FORMER_LDAP("unused_former_ldap"),
    SSO("sso"),
    NONE("none"),
    EMAIL_SIGNUP("email_signup");

    public final String value;

    private PatchUsersIdRequestBodyAuthenticationMethodEnum(String value) {
        this.value = value;
    }
}
