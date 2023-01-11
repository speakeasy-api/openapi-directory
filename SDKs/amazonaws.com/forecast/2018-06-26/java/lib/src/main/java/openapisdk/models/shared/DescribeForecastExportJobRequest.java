package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeForecastExportJobRequest {
    @JsonProperty("ForecastExportJobArn")
    public String forecastExportJobArn;
    public DescribeForecastExportJobRequest withForecastExportJobArn(String forecastExportJobArn) {
        this.forecastExportJobArn = forecastExportJobArn;
        return this;
    }
}