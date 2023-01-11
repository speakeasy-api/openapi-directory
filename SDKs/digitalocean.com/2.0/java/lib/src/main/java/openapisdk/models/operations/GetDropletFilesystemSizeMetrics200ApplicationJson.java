package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletFilesystemSizeMetrics200ApplicationJson {
    @JsonProperty("data")
    public GetDropletFilesystemSizeMetrics200ApplicationJsonData data;
    public GetDropletFilesystemSizeMetrics200ApplicationJson withData(GetDropletFilesystemSizeMetrics200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public GetDropletFilesystemSizeMetrics200ApplicationJsonStatusEnum status;
    public GetDropletFilesystemSizeMetrics200ApplicationJson withStatus(GetDropletFilesystemSizeMetrics200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}