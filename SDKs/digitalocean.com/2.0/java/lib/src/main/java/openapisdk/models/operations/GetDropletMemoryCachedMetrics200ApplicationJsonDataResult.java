package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletMemoryCachedMetrics200ApplicationJsonDataResult {
    @JsonProperty("metric")
    public java.util.Map<String, String> metric;
    public GetDropletMemoryCachedMetrics200ApplicationJsonDataResult withMetric(java.util.Map<String, String> metric) {
        this.metric = metric;
        return this;
    }
    @JsonProperty("values")
    public Object[][] values;
    public GetDropletMemoryCachedMetrics200ApplicationJsonDataResult withValues(Object[][] values) {
        this.values = values;
        return this;
    }
}