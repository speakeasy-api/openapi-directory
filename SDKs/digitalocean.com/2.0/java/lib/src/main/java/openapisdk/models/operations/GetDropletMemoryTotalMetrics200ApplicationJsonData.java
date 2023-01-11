package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletMemoryTotalMetrics200ApplicationJsonData {
    @JsonProperty("result")
    public GetDropletMemoryTotalMetrics200ApplicationJsonDataResult[] result;
    public GetDropletMemoryTotalMetrics200ApplicationJsonData withResult(GetDropletMemoryTotalMetrics200ApplicationJsonDataResult[] result) {
        this.result = result;
        return this;
    }
    @JsonProperty("resultType")
    public GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum resultType;
    public GetDropletMemoryTotalMetrics200ApplicationJsonData withResultType(GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum resultType) {
        this.resultType = resultType;
        return this;
    }
}