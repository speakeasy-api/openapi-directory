package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityRecognizerEvaluationMetrics
 * Detailed information about the accuracy of an entity recognizer. 
**/
public class EntityRecognizerEvaluationMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("F1Score")
    public Double f1Score;
    public EntityRecognizerEvaluationMetrics withF1Score(Double f1Score) {
        this.f1Score = f1Score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Precision")
    public Double precision;
    public EntityRecognizerEvaluationMetrics withPrecision(Double precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Recall")
    public Double recall;
    public EntityRecognizerEvaluationMetrics withRecall(Double recall) {
        this.recall = recall;
        return this;
    }
}