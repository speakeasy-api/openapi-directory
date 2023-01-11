package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletFilesystemFreeMetrics200ApplicationJson {
    @JsonProperty("data")
    public GetDropletFilesystemFreeMetrics200ApplicationJsonData data;
    public GetDropletFilesystemFreeMetrics200ApplicationJson withData(GetDropletFilesystemFreeMetrics200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum status;
    public GetDropletFilesystemFreeMetrics200ApplicationJson withStatus(GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}