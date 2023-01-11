package openapisdk.models.shared;


public enum SsoStrategyEntityProtocolEnum {
    OAUTH2("oauth2"),
    UNUSED_OPENID2("_unused_openid2"),
    SAML("saml"),
    ACTIVE_DIRECTORY("active_directory"),
    OPEN_LDAP("open_ldap"),
    SCIM("scim");

    public final String value;

    private SsoStrategyEntityProtocolEnum(String value) {
        this.value = value;
    }
}
