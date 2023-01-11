package openapisdk.models.shared;


public enum LoadBalancerTlsCertificateDomainStatusEnum {
    PENDING_VALIDATION("PENDING_VALIDATION"),
    FAILED("FAILED"),
    SUCCESS("SUCCESS");

    public final String value;

    private LoadBalancerTlsCertificateDomainStatusEnum(String value) {
        this.value = value;
    }
}
