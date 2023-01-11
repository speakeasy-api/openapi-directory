package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletMemoryFreeMetrics200ApplicationJson {
    @JsonProperty("data")
    public GetDropletMemoryFreeMetrics200ApplicationJsonData data;
    public GetDropletMemoryFreeMetrics200ApplicationJson withData(GetDropletMemoryFreeMetrics200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum status;
    public GetDropletMemoryFreeMetrics200ApplicationJson withStatus(GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}