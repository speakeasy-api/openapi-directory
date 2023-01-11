package openapisdk.models.operations;


public enum PostVehiclesVehicleidWatchRequestBodyPropertiesEnum {
    BATTERY_LEVEL("BATTERY_LEVEL"),
    RANGE("RANGE"),
    IS_PLUGGED_IN("IS_PLUGGED_IN"),
    IS_CHARGING("IS_CHARGING"),
    IS_CHARGING_REASONS("IS_CHARGING_REASONS"),
    LOCATION("LOCATION");

    public final String value;

    private PostVehiclesVehicleidWatchRequestBodyPropertiesEnum(String value) {
        this.value = value;
    }
}
