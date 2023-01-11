package openapisdk.models.shared;


public enum PagesHttpsCertificateStateEnum {
    NEW_("new"),
    AUTHORIZATION_CREATED("authorization_created"),
    AUTHORIZATION_PENDING("authorization_pending"),
    AUTHORIZED("authorized"),
    AUTHORIZATION_REVOKED("authorization_revoked"),
    ISSUED("issued"),
    UPLOADED("uploaded"),
    APPROVED("approved"),
    ERRORED("errored"),
    BAD_AUTHZ("bad_authz"),
    DESTROY_PENDING("destroy_pending"),
    DNS_CHANGED("dns_changed");

    public final String value;

    private PagesHttpsCertificateStateEnum(String value) {
        this.value = value;
    }
}
