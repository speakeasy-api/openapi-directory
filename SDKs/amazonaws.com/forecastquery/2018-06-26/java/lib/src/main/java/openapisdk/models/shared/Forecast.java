package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Forecast
 * Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.
**/
public class Forecast {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Predictions")
    public java.util.Map<String, DataPoint[]> predictions;
    public Forecast withPredictions(java.util.Map<String, DataPoint[]> predictions) {
        this.predictions = predictions;
        return this;
    }
}