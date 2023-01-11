package openapisdk.models.shared;


public enum SsoStrategyEntityLdapUsernameFieldEnum {
    S_AM_ACCOUNT_NAME("sAMAccountName"),
    USER_PRINCIPAL_NAME("userPrincipalName");

    public final String value;

    private SsoStrategyEntityLdapUsernameFieldEnum(String value) {
        this.value = value;
    }
}
