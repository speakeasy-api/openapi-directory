package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PredictOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prediction")
    public Prediction prediction;
    public PredictOutput withPrediction(Prediction prediction) {
        this.prediction = prediction;
        return this;
    }
}