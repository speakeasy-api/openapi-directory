package openapisdk.models.shared;


public enum ProvisioningStatusEnum {
    LATEST_PERMISSION_SET_PROVISIONED("LATEST_PERMISSION_SET_PROVISIONED"),
    LATEST_PERMISSION_SET_NOT_PROVISIONED("LATEST_PERMISSION_SET_NOT_PROVISIONED");

    public final String value;

    private ProvisioningStatusEnum(String value) {
        this.value = value;
    }
}
