package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteForecastRequest {
    @JsonProperty("ForecastArn")
    public String forecastArn;
    public DeleteForecastRequest withForecastArn(String forecastArn) {
        this.forecastArn = forecastArn;
        return this;
    }
}