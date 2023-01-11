package openapisdk.models.shared;


public enum ExternalEventEntityEventTypeEnum {
    LDAP_SYNC("ldap_sync"),
    REMOTE_SERVER_SYNC("remote_server_sync"),
    LOCKOUT("lockout"),
    LDAP_LOGIN("ldap_login"),
    SAML_LOGIN("saml_login"),
    CLIENT_LOG("client_log"),
    PENDING_WORK("pending_work");

    public final String value;

    private ExternalEventEntityEventTypeEnum(String value) {
        this.value = value;
    }
}
