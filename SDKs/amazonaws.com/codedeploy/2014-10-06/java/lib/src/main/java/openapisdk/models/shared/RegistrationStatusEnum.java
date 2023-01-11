package openapisdk.models.shared;


public enum RegistrationStatusEnum {
    REGISTERED("Registered"),
    DEREGISTERED("Deregistered");

    public final String value;

    private RegistrationStatusEnum(String value) {
        this.value = value;
    }
}
