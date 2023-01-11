package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassifierEvaluationMetrics
 * Describes the result metrics for the test data associated with an documentation classifier.
**/
public class ClassifierEvaluationMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Accuracy")
    public Double accuracy;
    public ClassifierEvaluationMetrics withAccuracy(Double accuracy) {
        this.accuracy = accuracy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("F1Score")
    public Double f1Score;
    public ClassifierEvaluationMetrics withF1Score(Double f1Score) {
        this.f1Score = f1Score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HammingLoss")
    public Double hammingLoss;
    public ClassifierEvaluationMetrics withHammingLoss(Double hammingLoss) {
        this.hammingLoss = hammingLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MicroF1Score")
    public Double microF1Score;
    public ClassifierEvaluationMetrics withMicroF1Score(Double microF1Score) {
        this.microF1Score = microF1Score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MicroPrecision")
    public Double microPrecision;
    public ClassifierEvaluationMetrics withMicroPrecision(Double microPrecision) {
        this.microPrecision = microPrecision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MicroRecall")
    public Double microRecall;
    public ClassifierEvaluationMetrics withMicroRecall(Double microRecall) {
        this.microRecall = microRecall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Precision")
    public Double precision;
    public ClassifierEvaluationMetrics withPrecision(Double precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Recall")
    public Double recall;
    public ClassifierEvaluationMetrics withRecall(Double recall) {
        this.recall = recall;
        return this;
    }
}