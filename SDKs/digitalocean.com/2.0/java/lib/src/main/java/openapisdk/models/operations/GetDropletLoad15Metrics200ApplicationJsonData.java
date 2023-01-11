package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletLoad15Metrics200ApplicationJsonData {
    @JsonProperty("result")
    public GetDropletLoad15Metrics200ApplicationJsonDataResult[] result;
    public GetDropletLoad15Metrics200ApplicationJsonData withResult(GetDropletLoad15Metrics200ApplicationJsonDataResult[] result) {
        this.result = result;
        return this;
    }
    @JsonProperty("resultType")
    public GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum resultType;
    public GetDropletLoad15Metrics200ApplicationJsonData withResultType(GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum resultType) {
        this.resultType = resultType;
        return this;
    }
}