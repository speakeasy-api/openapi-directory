package openapisdk.models.shared;


public enum DeviceStatusEnum {
    ACTIVE("ACTIVE"),
    SIGNED_OUT("SIGNED_OUT");

    public final String value;

    private DeviceStatusEnum(String value) {
        this.value = value;
    }
}
