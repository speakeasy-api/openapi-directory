package openapisdk.models.shared;


public enum PredictiveScalingMaxCapacityBehaviorEnum {
    SET_FORECAST_CAPACITY_TO_MAX_CAPACITY("SetForecastCapacityToMaxCapacity"),
    SET_MAX_CAPACITY_TO_FORECAST_CAPACITY("SetMaxCapacityToForecastCapacity"),
    SET_MAX_CAPACITY_ABOVE_FORECAST_CAPACITY("SetMaxCapacityAboveForecastCapacity");

    public final String value;

    private PredictiveScalingMaxCapacityBehaviorEnum(String value) {
        this.value = value;
    }
}
