package openapisdk.models.shared;


public enum LoadBalancerTlsCertificateFailureReasonEnum {
    NO_AVAILABLE_CONTACTS("NO_AVAILABLE_CONTACTS"),
    ADDITIONAL_VERIFICATION_REQUIRED("ADDITIONAL_VERIFICATION_REQUIRED"),
    DOMAIN_NOT_ALLOWED("DOMAIN_NOT_ALLOWED"),
    INVALID_PUBLIC_DOMAIN("INVALID_PUBLIC_DOMAIN"),
    OTHER("OTHER");

    public final String value;

    private LoadBalancerTlsCertificateFailureReasonEnum(String value) {
        this.value = value;
    }
}
