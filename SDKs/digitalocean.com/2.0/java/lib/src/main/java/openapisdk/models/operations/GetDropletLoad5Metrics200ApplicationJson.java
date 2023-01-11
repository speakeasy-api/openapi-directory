package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletLoad5Metrics200ApplicationJson {
    @JsonProperty("data")
    public GetDropletLoad5Metrics200ApplicationJsonData data;
    public GetDropletLoad5Metrics200ApplicationJson withData(GetDropletLoad5Metrics200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public GetDropletLoad5Metrics200ApplicationJsonStatusEnum status;
    public GetDropletLoad5Metrics200ApplicationJson withStatus(GetDropletLoad5Metrics200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}