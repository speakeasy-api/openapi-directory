package openapisdk.models.shared;


public enum CertificateModeEnum {
    DEFAULT_("DEFAULT"),
    SNI_ONLY("SNI_ONLY");

    public final String value;

    private CertificateModeEnum(String value) {
        this.value = value;
    }
}
