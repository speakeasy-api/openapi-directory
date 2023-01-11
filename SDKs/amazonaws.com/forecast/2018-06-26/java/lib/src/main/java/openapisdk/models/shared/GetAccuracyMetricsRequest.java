package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAccuracyMetricsRequest {
    @JsonProperty("PredictorArn")
    public String predictorArn;
    public GetAccuracyMetricsRequest withPredictorArn(String predictorArn) {
        this.predictorArn = predictorArn;
        return this;
    }
}