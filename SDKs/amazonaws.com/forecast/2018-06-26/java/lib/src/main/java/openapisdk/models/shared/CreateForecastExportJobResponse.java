package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateForecastExportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastExportJobArn")
    public String forecastExportJobArn;
    public CreateForecastExportJobResponse withForecastExportJobArn(String forecastExportJobArn) {
        this.forecastExportJobArn = forecastExportJobArn;
        return this;
    }
}