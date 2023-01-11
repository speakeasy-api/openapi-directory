package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletMemoryAvailableMetrics200ApplicationJson {
    @JsonProperty("data")
    public GetDropletMemoryAvailableMetrics200ApplicationJsonData data;
    public GetDropletMemoryAvailableMetrics200ApplicationJson withData(GetDropletMemoryAvailableMetrics200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum status;
    public GetDropletMemoryAvailableMetrics200ApplicationJson withStatus(GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}