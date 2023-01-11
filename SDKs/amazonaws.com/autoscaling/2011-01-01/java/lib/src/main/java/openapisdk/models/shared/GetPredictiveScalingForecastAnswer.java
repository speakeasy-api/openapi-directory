package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class GetPredictiveScalingForecastAnswer {
    public CapacityForecast capacityForecast;
    public GetPredictiveScalingForecastAnswer withCapacityForecast(CapacityForecast capacityForecast) {
        this.capacityForecast = capacityForecast;
        return this;
    }
    public LoadForecast[] loadForecast;
    public GetPredictiveScalingForecastAnswer withLoadForecast(LoadForecast[] loadForecast) {
        this.loadForecast = loadForecast;
        return this;
    }
    public OffsetDateTime updateTime;
    public GetPredictiveScalingForecastAnswer withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}