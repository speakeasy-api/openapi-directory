package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateForecastRequest {
    @JsonProperty("ForecastName")
    public String forecastName;
    public CreateForecastRequest withForecastName(String forecastName) {
        this.forecastName = forecastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastTypes")
    public String[] forecastTypes;
    public CreateForecastRequest withForecastTypes(String[] forecastTypes) {
        this.forecastTypes = forecastTypes;
        return this;
    }
    @JsonProperty("PredictorArn")
    public String predictorArn;
    public CreateForecastRequest withPredictorArn(String predictorArn) {
        this.predictorArn = predictorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateForecastRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}