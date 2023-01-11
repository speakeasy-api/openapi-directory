package openapisdk.models.shared;


public enum CertificateStatusEnum {
    PENDING_VALIDATION("PENDING_VALIDATION"),
    ISSUED("ISSUED"),
    INACTIVE("INACTIVE"),
    EXPIRED("EXPIRED"),
    VALIDATION_TIMED_OUT("VALIDATION_TIMED_OUT"),
    REVOKED("REVOKED"),
    FAILED("FAILED");

    public final String value;

    private CertificateStatusEnum(String value) {
        this.value = value;
    }
}
