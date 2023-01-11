package openapisdk.models.operations;


public enum CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum {
    CUSTOM("custom"),
    LETS_ENCRYPT("lets_encrypt");

    public final String value;

    private CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum(String value) {
        this.value = value;
    }
}
