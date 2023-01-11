package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateForecastExportJobRequest {
    @JsonProperty("Destination")
    public DataDestination destination;
    public CreateForecastExportJobRequest withDestination(DataDestination destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("ForecastArn")
    public String forecastArn;
    public CreateForecastExportJobRequest withForecastArn(String forecastArn) {
        this.forecastArn = forecastArn;
        return this;
    }
    @JsonProperty("ForecastExportJobName")
    public String forecastExportJobName;
    public CreateForecastExportJobRequest withForecastExportJobName(String forecastExportJobName) {
        this.forecastExportJobName = forecastExportJobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateForecastExportJobRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}