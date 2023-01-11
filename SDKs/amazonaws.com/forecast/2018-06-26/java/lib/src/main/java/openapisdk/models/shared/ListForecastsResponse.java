package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListForecastsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Forecasts")
    public ForecastSummary[] forecasts;
    public ListForecastsResponse withForecasts(ForecastSummary[] forecasts) {
        this.forecasts = forecasts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListForecastsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}