package openapisdk.models.shared;


public enum LoadBalancerTlsCertificateStatusEnum {
    PENDING_VALIDATION("PENDING_VALIDATION"),
    ISSUED("ISSUED"),
    INACTIVE("INACTIVE"),
    EXPIRED("EXPIRED"),
    VALIDATION_TIMED_OUT("VALIDATION_TIMED_OUT"),
    REVOKED("REVOKED"),
    FAILED("FAILED"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private LoadBalancerTlsCertificateStatusEnum(String value) {
        this.value = value;
    }
}
