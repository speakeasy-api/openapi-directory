package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateForecastResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastArn")
    public String forecastArn;
    public CreateForecastResponse withForecastArn(String forecastArn) {
        this.forecastArn = forecastArn;
        return this;
    }
}