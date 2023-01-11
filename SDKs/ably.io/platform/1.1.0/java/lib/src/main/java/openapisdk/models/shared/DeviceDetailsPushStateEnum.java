package openapisdk.models.shared;


public enum DeviceDetailsPushStateEnum {
    ACTIVE("Active"),
    FAILING("Failing"),
    FAILED("Failed");

    public final String value;

    private DeviceDetailsPushStateEnum(String value) {
        this.value = value;
    }
}
