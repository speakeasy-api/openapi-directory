package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityTypesEvaluationMetrics
 * Detailed information about the accuracy of an entity recognizer for a specific entity type. 
**/
public class EntityTypesEvaluationMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("F1Score")
    public Double f1Score;
    public EntityTypesEvaluationMetrics withF1Score(Double f1Score) {
        this.f1Score = f1Score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Precision")
    public Double precision;
    public EntityTypesEvaluationMetrics withPrecision(Double precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Recall")
    public Double recall;
    public EntityTypesEvaluationMetrics withRecall(Double recall) {
        this.recall = recall;
        return this;
    }
}