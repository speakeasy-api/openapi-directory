package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletLoad5Metrics200ApplicationJsonData {
    @JsonProperty("result")
    public GetDropletLoad5Metrics200ApplicationJsonDataResult[] result;
    public GetDropletLoad5Metrics200ApplicationJsonData withResult(GetDropletLoad5Metrics200ApplicationJsonDataResult[] result) {
        this.result = result;
        return this;
    }
    @JsonProperty("resultType")
    public GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum resultType;
    public GetDropletLoad5Metrics200ApplicationJsonData withResultType(GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum resultType) {
        this.resultType = resultType;
        return this;
    }
}