package openapisdk.models.shared;


public enum PrivateConnectionProvisioningStatusEnum {
    FAILED("FAILED"),
    PENDING("PENDING"),
    CREATED("CREATED");

    public final String value;

    private PrivateConnectionProvisioningStatusEnum(String value) {
        this.value = value;
    }
}
