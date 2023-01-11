package openapisdk.models.shared;


public enum DeviceAvailabilityEnum {
    TEMPORARY_NOT_AVAILABLE("TEMPORARY_NOT_AVAILABLE"),
    BUSY("BUSY"),
    AVAILABLE("AVAILABLE"),
    HIGHLY_AVAILABLE("HIGHLY_AVAILABLE");

    public final String value;

    private DeviceAvailabilityEnum(String value) {
        this.value = value;
    }
}
