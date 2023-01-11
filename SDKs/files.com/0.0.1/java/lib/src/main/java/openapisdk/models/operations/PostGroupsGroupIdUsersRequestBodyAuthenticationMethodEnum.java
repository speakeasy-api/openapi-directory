package openapisdk.models.operations;


public enum PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum {
    PASSWORD("password"),
    UNUSED_FORMER_LDAP("unused_former_ldap"),
    SSO("sso"),
    NONE("none"),
    EMAIL_SIGNUP("email_signup");

    public final String value;

    private PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum(String value) {
        this.value = value;
    }
}
