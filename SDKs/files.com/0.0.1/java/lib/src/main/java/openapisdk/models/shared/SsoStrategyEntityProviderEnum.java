package openapisdk.models.shared;


public enum SsoStrategyEntityProviderEnum {
    GOOGLE("google"),
    AUTH0("auth0"),
    OKTA("okta"),
    ATLASSIAN("atlassian"),
    AZURE("azure"),
    BOX("box"),
    DROPBOX("dropbox"),
    SLACK("slack"),
    UNUSED_UBUNTU("_unused_ubuntu"),
    ONELOGIN("onelogin"),
    SAML("saml"),
    IDAPTIVE("idaptive"),
    LDAP("ldap"),
    SCIM("scim");

    public final String value;

    private SsoStrategyEntityProviderEnum(String value) {
        this.value = value;
    }
}
