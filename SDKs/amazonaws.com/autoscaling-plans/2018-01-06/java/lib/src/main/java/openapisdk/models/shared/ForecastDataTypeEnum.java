package openapisdk.models.shared;


public enum ForecastDataTypeEnum {
    CAPACITY_FORECAST("CapacityForecast"),
    LOAD_FORECAST("LoadForecast"),
    SCHEDULED_ACTION_MIN_CAPACITY("ScheduledActionMinCapacity"),
    SCHEDULED_ACTION_MAX_CAPACITY("ScheduledActionMaxCapacity");

    public final String value;

    private ForecastDataTypeEnum(String value) {
        this.value = value;
    }
}
