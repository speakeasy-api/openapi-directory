package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * CapacityForecast
 * A <code>GetPredictiveScalingForecast</code> call returns the capacity forecast for a predictive scaling policy. This structure includes the data points for that capacity forecast, along with the timestamps of those data points. 
**/
public class CapacityForecast {
    public OffsetDateTime[] timestamps;
    public CapacityForecast withTimestamps(OffsetDateTime[] timestamps) {
        this.timestamps = timestamps;
        return this;
    }
    public Double[] values;
    public CapacityForecast withValues(Double[] values) {
        this.values = values;
        return this;
    }
}