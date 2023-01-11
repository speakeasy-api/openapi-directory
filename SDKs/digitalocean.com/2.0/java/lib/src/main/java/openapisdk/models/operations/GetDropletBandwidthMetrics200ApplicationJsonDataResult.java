package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletBandwidthMetrics200ApplicationJsonDataResult {
    @JsonProperty("metric")
    public java.util.Map<String, String> metric;
    public GetDropletBandwidthMetrics200ApplicationJsonDataResult withMetric(java.util.Map<String, String> metric) {
        this.metric = metric;
        return this;
    }
    @JsonProperty("values")
    public Object[][] values;
    public GetDropletBandwidthMetrics200ApplicationJsonDataResult withValues(Object[][] values) {
        this.values = values;
        return this;
    }
}