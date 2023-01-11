package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletFilesystemFreeMetrics200ApplicationJsonData {
    @JsonProperty("result")
    public GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult[] result;
    public GetDropletFilesystemFreeMetrics200ApplicationJsonData withResult(GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult[] result) {
        this.result = result;
        return this;
    }
    @JsonProperty("resultType")
    public GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum resultType;
    public GetDropletFilesystemFreeMetrics200ApplicationJsonData withResultType(GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum resultType) {
        this.resultType = resultType;
        return this;
    }
}