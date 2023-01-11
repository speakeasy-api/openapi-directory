package openapisdk.models.shared;


public enum DeviceFilterAttributeEnum {
    ARN("ARN"),
    PLATFORM("PLATFORM"),
    OS_VERSION("OS_VERSION"),
    MODEL("MODEL"),
    AVAILABILITY("AVAILABILITY"),
    FORM_FACTOR("FORM_FACTOR"),
    MANUFACTURER("MANUFACTURER"),
    REMOTE_ACCESS_ENABLED("REMOTE_ACCESS_ENABLED"),
    REMOTE_DEBUG_ENABLED("REMOTE_DEBUG_ENABLED"),
    INSTANCE_ARN("INSTANCE_ARN"),
    INSTANCE_LABELS("INSTANCE_LABELS"),
    FLEET_TYPE("FLEET_TYPE");

    public final String value;

    private DeviceFilterAttributeEnum(String value) {
        this.value = value;
    }
}
