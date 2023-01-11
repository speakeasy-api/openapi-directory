package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Prediction
 * <p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul>
**/
public class Prediction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public java.util.Map<String, String> details;
    public Prediction withDetails(java.util.Map<String, String> details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictedLabel")
    public String predictedLabel;
    public Prediction withPredictedLabel(String predictedLabel) {
        this.predictedLabel = predictedLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictedScores")
    public java.util.Map<String, Double> predictedScores;
    public Prediction withPredictedScores(java.util.Map<String, Double> predictedScores) {
        this.predictedScores = predictedScores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictedValue")
    public Float predictedValue;
    public Prediction withPredictedValue(Float predictedValue) {
        this.predictedValue = predictedValue;
        return this;
    }
}