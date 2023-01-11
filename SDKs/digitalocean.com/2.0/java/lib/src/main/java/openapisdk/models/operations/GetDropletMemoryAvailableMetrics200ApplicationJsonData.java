package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletMemoryAvailableMetrics200ApplicationJsonData {
    @JsonProperty("result")
    public GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult[] result;
    public GetDropletMemoryAvailableMetrics200ApplicationJsonData withResult(GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult[] result) {
        this.result = result;
        return this;
    }
    @JsonProperty("resultType")
    public GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum resultType;
    public GetDropletMemoryAvailableMetrics200ApplicationJsonData withResultType(GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum resultType) {
        this.resultType = resultType;
        return this;
    }
}