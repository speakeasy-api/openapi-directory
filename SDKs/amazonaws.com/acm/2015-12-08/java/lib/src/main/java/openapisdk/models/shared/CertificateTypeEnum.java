package openapisdk.models.shared;


public enum CertificateTypeEnum {
    IMPORTED("IMPORTED"),
    AMAZON_ISSUED("AMAZON_ISSUED"),
    PRIVATE_("PRIVATE");

    public final String value;

    private CertificateTypeEnum(String value) {
        this.value = value;
    }
}
