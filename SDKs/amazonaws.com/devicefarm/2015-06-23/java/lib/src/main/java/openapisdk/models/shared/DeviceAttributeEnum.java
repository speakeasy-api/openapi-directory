package openapisdk.models.shared;


public enum DeviceAttributeEnum {
    ARN("ARN"),
    PLATFORM("PLATFORM"),
    FORM_FACTOR("FORM_FACTOR"),
    MANUFACTURER("MANUFACTURER"),
    REMOTE_ACCESS_ENABLED("REMOTE_ACCESS_ENABLED"),
    REMOTE_DEBUG_ENABLED("REMOTE_DEBUG_ENABLED"),
    APPIUM_VERSION("APPIUM_VERSION"),
    INSTANCE_ARN("INSTANCE_ARN"),
    INSTANCE_LABELS("INSTANCE_LABELS"),
    FLEET_TYPE("FLEET_TYPE"),
    OS_VERSION("OS_VERSION"),
    MODEL("MODEL"),
    AVAILABILITY("AVAILABILITY");

    public final String value;

    private DeviceAttributeEnum(String value) {
        this.value = value;
    }
}
