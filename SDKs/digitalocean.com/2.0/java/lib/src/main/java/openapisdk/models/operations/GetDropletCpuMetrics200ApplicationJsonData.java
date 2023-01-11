package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletCpuMetrics200ApplicationJsonData {
    @JsonProperty("result")
    public GetDropletCpuMetrics200ApplicationJsonDataResult[] result;
    public GetDropletCpuMetrics200ApplicationJsonData withResult(GetDropletCpuMetrics200ApplicationJsonDataResult[] result) {
        this.result = result;
        return this;
    }
    @JsonProperty("resultType")
    public GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum resultType;
    public GetDropletCpuMetrics200ApplicationJsonData withResultType(GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum resultType) {
        this.resultType = resultType;
        return this;
    }
}