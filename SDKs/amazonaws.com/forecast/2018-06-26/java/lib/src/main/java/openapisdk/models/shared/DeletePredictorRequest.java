package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeletePredictorRequest {
    @JsonProperty("PredictorArn")
    public String predictorArn;
    public DeletePredictorRequest withPredictorArn(String predictorArn) {
        this.predictorArn = predictorArn;
        return this;
    }
}