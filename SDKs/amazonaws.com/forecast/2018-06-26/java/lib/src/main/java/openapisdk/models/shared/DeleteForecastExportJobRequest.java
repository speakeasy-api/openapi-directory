package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteForecastExportJobRequest {
    @JsonProperty("ForecastExportJobArn")
    public String forecastExportJobArn;
    public DeleteForecastExportJobRequest withForecastExportJobArn(String forecastExportJobArn) {
        this.forecastExportJobArn = forecastExportJobArn;
        return this;
    }
}