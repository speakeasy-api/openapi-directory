package openapisdk.models.shared;


public enum LoadBalancerTlsCertificateRevocationReasonEnum {
    UNSPECIFIED("UNSPECIFIED"),
    KEY_COMPROMISE("KEY_COMPROMISE"),
    CA_COMPROMISE("CA_COMPROMISE"),
    AFFILIATION_CHANGED("AFFILIATION_CHANGED"),
    SUPERCEDED("SUPERCEDED"),
    CESSATION_OF_OPERATION("CESSATION_OF_OPERATION"),
    CERTIFICATE_HOLD("CERTIFICATE_HOLD"),
    REMOVE_FROM_CRL("REMOVE_FROM_CRL"),
    PRIVILEGE_WITHDRAWN("PRIVILEGE_WITHDRAWN"),
    AA_COMPROMISE("A_A_COMPROMISE");

    public final String value;

    private LoadBalancerTlsCertificateRevocationReasonEnum(String value) {
        this.value = value;
    }
}
