package openapisdk.models.shared;


public enum PredictiveScalingModeEnum {
    FORECAST_AND_SCALE("ForecastAndScale"),
    FORECAST_ONLY("ForecastOnly");

    public final String value;

    private PredictiveScalingModeEnum(String value) {
        this.value = value;
    }
}
