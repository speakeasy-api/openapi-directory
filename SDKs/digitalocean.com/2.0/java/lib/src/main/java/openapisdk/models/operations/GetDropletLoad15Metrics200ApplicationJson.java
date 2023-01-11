package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletLoad15Metrics200ApplicationJson {
    @JsonProperty("data")
    public GetDropletLoad15Metrics200ApplicationJsonData data;
    public GetDropletLoad15Metrics200ApplicationJson withData(GetDropletLoad15Metrics200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public GetDropletLoad15Metrics200ApplicationJsonStatusEnum status;
    public GetDropletLoad15Metrics200ApplicationJson withStatus(GetDropletLoad15Metrics200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}