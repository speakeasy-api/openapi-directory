package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletFilesystemSizeMetrics200ApplicationJsonData {
    @JsonProperty("result")
    public GetDropletFilesystemSizeMetrics200ApplicationJsonDataResult[] result;
    public GetDropletFilesystemSizeMetrics200ApplicationJsonData withResult(GetDropletFilesystemSizeMetrics200ApplicationJsonDataResult[] result) {
        this.result = result;
        return this;
    }
    @JsonProperty("resultType")
    public GetDropletFilesystemSizeMetrics200ApplicationJsonDataResultTypeEnum resultType;
    public GetDropletFilesystemSizeMetrics200ApplicationJsonData withResultType(GetDropletFilesystemSizeMetrics200ApplicationJsonDataResultTypeEnum resultType) {
        this.resultType = resultType;
        return this;
    }
}