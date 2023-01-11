package openapisdk.models.shared;


public enum CertificateAuthorityTypeEnum {
    ROOT("ROOT"),
    SUBORDINATE("SUBORDINATE");

    public final String value;

    private CertificateAuthorityTypeEnum(String value) {
        this.value = value;
    }
}
