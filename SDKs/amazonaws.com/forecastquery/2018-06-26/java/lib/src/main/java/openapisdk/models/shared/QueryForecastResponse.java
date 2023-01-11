package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryForecastResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Forecast")
    public Forecast forecast;
    public QueryForecastResponse withForecast(Forecast forecast) {
        this.forecast = forecast;
        return this;
    }
}