package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletLoad5Metrics200ApplicationJsonDataResult {
    @JsonProperty("metric")
    public java.util.Map<String, String> metric;
    public GetDropletLoad5Metrics200ApplicationJsonDataResult withMetric(java.util.Map<String, String> metric) {
        this.metric = metric;
        return this;
    }
    @JsonProperty("values")
    public Object[][] values;
    public GetDropletLoad5Metrics200ApplicationJsonDataResult withValues(Object[][] values) {
        this.values = values;
        return this;
    }
}