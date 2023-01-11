package openapisdk.models.shared;


public enum RevocationReasonEnum {
    UNSPECIFIED("UNSPECIFIED"),
    KEY_COMPROMISE("KEY_COMPROMISE"),
    CERTIFICATE_AUTHORITY_COMPROMISE("CERTIFICATE_AUTHORITY_COMPROMISE"),
    AFFILIATION_CHANGED("AFFILIATION_CHANGED"),
    SUPERSEDED("SUPERSEDED"),
    CESSATION_OF_OPERATION("CESSATION_OF_OPERATION"),
    PRIVILEGE_WITHDRAWN("PRIVILEGE_WITHDRAWN"),
    AA_COMPROMISE("A_A_COMPROMISE");

    public final String value;

    private RevocationReasonEnum(String value) {
        this.value = value;
    }
}
