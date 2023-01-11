package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAssetPropertyAggregatesResponse {
    @JsonProperty("aggregatedValues")
    public AggregatedValue[] aggregatedValues;
    public GetAssetPropertyAggregatesResponse withAggregatedValues(AggregatedValue[] aggregatedValues) {
        this.aggregatedValues = aggregatedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetAssetPropertyAggregatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}