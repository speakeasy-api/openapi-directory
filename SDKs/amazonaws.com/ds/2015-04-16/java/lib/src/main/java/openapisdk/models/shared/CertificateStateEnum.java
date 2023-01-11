package openapisdk.models.shared;


public enum CertificateStateEnum {
    REGISTERING("Registering"),
    REGISTERED("Registered"),
    REGISTER_FAILED("RegisterFailed"),
    DEREGISTERING("Deregistering"),
    DEREGISTERED("Deregistered"),
    DEREGISTER_FAILED("DeregisterFailed");

    public final String value;

    private CertificateStateEnum(String value) {
        this.value = value;
    }
}
