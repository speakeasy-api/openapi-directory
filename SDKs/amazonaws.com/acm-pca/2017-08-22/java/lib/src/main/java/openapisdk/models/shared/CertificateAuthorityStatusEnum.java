package openapisdk.models.shared;


public enum CertificateAuthorityStatusEnum {
    CREATING("CREATING"),
    PENDING_CERTIFICATE("PENDING_CERTIFICATE"),
    ACTIVE("ACTIVE"),
    DELETED("DELETED"),
    DISABLED("DISABLED"),
    EXPIRED("EXPIRED"),
    FAILED("FAILED");

    public final String value;

    private CertificateAuthorityStatusEnum(String value) {
        this.value = value;
    }
}
