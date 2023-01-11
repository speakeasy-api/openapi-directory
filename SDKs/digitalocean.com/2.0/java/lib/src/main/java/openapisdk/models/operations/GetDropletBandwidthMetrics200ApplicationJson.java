package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletBandwidthMetrics200ApplicationJson {
    @JsonProperty("data")
    public GetDropletBandwidthMetrics200ApplicationJsonData data;
    public GetDropletBandwidthMetrics200ApplicationJson withData(GetDropletBandwidthMetrics200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public GetDropletBandwidthMetrics200ApplicationJsonStatusEnum status;
    public GetDropletBandwidthMetrics200ApplicationJson withStatus(GetDropletBandwidthMetrics200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}