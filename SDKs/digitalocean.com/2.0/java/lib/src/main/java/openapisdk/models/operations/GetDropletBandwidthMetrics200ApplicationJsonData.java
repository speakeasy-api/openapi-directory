package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDropletBandwidthMetrics200ApplicationJsonData {
    @JsonProperty("result")
    public GetDropletBandwidthMetrics200ApplicationJsonDataResult[] result;
    public GetDropletBandwidthMetrics200ApplicationJsonData withResult(GetDropletBandwidthMetrics200ApplicationJsonDataResult[] result) {
        this.result = result;
        return this;
    }
    @JsonProperty("resultType")
    public GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum resultType;
    public GetDropletBandwidthMetrics200ApplicationJsonData withResultType(GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum resultType) {
        this.resultType = resultType;
        return this;
    }
}