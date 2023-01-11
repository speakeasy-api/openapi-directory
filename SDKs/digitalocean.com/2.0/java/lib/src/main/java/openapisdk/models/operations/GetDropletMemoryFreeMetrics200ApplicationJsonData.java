package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletMemoryFreeMetrics200ApplicationJsonData {
    @JsonProperty("result")
    public GetDropletMemoryFreeMetrics200ApplicationJsonDataResult[] result;
    public GetDropletMemoryFreeMetrics200ApplicationJsonData withResult(GetDropletMemoryFreeMetrics200ApplicationJsonDataResult[] result) {
        this.result = result;
        return this;
    }
    @JsonProperty("resultType")
    public GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum resultType;
    public GetDropletMemoryFreeMetrics200ApplicationJsonData withResultType(GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum resultType) {
        this.resultType = resultType;
        return this;
    }
}