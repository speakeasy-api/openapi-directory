package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletMemoryTotalMetrics200ApplicationJson {
    @JsonProperty("data")
    public GetDropletMemoryTotalMetrics200ApplicationJsonData data;
    public GetDropletMemoryTotalMetrics200ApplicationJson withData(GetDropletMemoryTotalMetrics200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum status;
    public GetDropletMemoryTotalMetrics200ApplicationJson withStatus(GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}