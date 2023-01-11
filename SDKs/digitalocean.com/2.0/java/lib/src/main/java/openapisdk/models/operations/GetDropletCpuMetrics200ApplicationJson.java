package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletCpuMetrics200ApplicationJson {
    @JsonProperty("data")
    public GetDropletCpuMetrics200ApplicationJsonData data;
    public GetDropletCpuMetrics200ApplicationJson withData(GetDropletCpuMetrics200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public GetDropletCpuMetrics200ApplicationJsonStatusEnum status;
    public GetDropletCpuMetrics200ApplicationJson withStatus(GetDropletCpuMetrics200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}