package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletMemoryCachedMetrics200ApplicationJson {
    @JsonProperty("data")
    public GetDropletMemoryCachedMetrics200ApplicationJsonData data;
    public GetDropletMemoryCachedMetrics200ApplicationJson withData(GetDropletMemoryCachedMetrics200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum status;
    public GetDropletMemoryCachedMetrics200ApplicationJson withStatus(GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}