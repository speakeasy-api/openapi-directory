package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePredictorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictorArn")
    public String predictorArn;
    public CreatePredictorResponse withPredictorArn(String predictorArn) {
        this.predictorArn = predictorArn;
        return this;
    }
}