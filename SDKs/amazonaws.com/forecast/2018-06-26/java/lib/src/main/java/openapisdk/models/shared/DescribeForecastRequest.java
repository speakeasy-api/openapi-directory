package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeForecastRequest {
    @JsonProperty("ForecastArn")
    public String forecastArn;
    public DescribeForecastRequest withForecastArn(String forecastArn) {
        this.forecastArn = forecastArn;
        return this;
    }
}