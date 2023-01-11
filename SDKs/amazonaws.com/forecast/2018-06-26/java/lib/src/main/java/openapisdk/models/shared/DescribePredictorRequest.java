package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribePredictorRequest {
    @JsonProperty("PredictorArn")
    public String predictorArn;
    public DescribePredictorRequest withPredictorArn(String predictorArn) {
        this.predictorArn = predictorArn;
        return this;
    }
}