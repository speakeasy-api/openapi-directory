package openapisdk.models.shared;


public enum DeviceStatusEnum {
    ONLINE("ONLINE"),
    OFFLINE("OFFLINE"),
    RETIRED("RETIRED");

    public final String value;

    private DeviceStatusEnum(String value) {
        this.value = value;
    }
}
