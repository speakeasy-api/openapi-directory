package openapisdk.models.shared;


public enum CertificateTypeEnum {
    CLIENT_CERT_AUTH("ClientCertAuth"),
    CLIENT_LDAPS("ClientLDAPS");

    public final String value;

    private CertificateTypeEnum(String value) {
        this.value = value;
    }
}
