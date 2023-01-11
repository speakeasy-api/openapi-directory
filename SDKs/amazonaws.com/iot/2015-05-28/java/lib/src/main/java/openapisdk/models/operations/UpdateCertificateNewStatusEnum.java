package openapisdk.models.operations;


public enum UpdateCertificateNewStatusEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    REVOKED("REVOKED"),
    PENDING_TRANSFER("PENDING_TRANSFER"),
    REGISTER_INACTIVE("REGISTER_INACTIVE"),
    PENDING_ACTIVATION("PENDING_ACTIVATION");

    public final String value;

    private UpdateCertificateNewStatusEnum(String value) {
        this.value = value;
    }
}
