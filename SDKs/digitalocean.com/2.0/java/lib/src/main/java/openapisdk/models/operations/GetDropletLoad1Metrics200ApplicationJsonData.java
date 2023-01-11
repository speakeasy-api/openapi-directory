package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletLoad1Metrics200ApplicationJsonData {
    @JsonProperty("result")
    public GetDropletLoad1Metrics200ApplicationJsonDataResult[] result;
    public GetDropletLoad1Metrics200ApplicationJsonData withResult(GetDropletLoad1Metrics200ApplicationJsonDataResult[] result) {
        this.result = result;
        return this;
    }
    @JsonProperty("resultType")
    public GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum resultType;
    public GetDropletLoad1Metrics200ApplicationJsonData withResultType(GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum resultType) {
        this.resultType = resultType;
        return this;
    }
}