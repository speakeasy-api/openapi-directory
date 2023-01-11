package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletLoad1Metrics200ApplicationJson {
    @JsonProperty("data")
    public GetDropletLoad1Metrics200ApplicationJsonData data;
    public GetDropletLoad1Metrics200ApplicationJson withData(GetDropletLoad1Metrics200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public GetDropletLoad1Metrics200ApplicationJsonStatusEnum status;
    public GetDropletLoad1Metrics200ApplicationJson withStatus(GetDropletLoad1Metrics200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}