package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletMemoryCachedMetrics200ApplicationJsonData {
    @JsonProperty("result")
    public GetDropletMemoryCachedMetrics200ApplicationJsonDataResult[] result;
    public GetDropletMemoryCachedMetrics200ApplicationJsonData withResult(GetDropletMemoryCachedMetrics200ApplicationJsonDataResult[] result) {
        this.result = result;
        return this;
    }
    @JsonProperty("resultType")
    public GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum resultType;
    public GetDropletMemoryCachedMetrics200ApplicationJsonData withResultType(GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum resultType) {
        this.resultType = resultType;
        return this;
    }
}