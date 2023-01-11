package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Metrics
 * Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object.
**/
public class Metrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AverageWeightedQuantileLoss")
    public Double averageWeightedQuantileLoss;
    public Metrics withAverageWeightedQuantileLoss(Double averageWeightedQuantileLoss) {
        this.averageWeightedQuantileLoss = averageWeightedQuantileLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMetrics")
    public ErrorMetric[] errorMetrics;
    public Metrics withErrorMetrics(ErrorMetric[] errorMetrics) {
        this.errorMetrics = errorMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RMSE")
    public java.util.Map<String, Object> rmse;
    public Metrics withRmse(java.util.Map<String, Object> rmse) {
        this.rmse = rmse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WeightedQuantileLosses")
    public WeightedQuantileLoss[] weightedQuantileLosses;
    public Metrics withWeightedQuantileLosses(WeightedQuantileLoss[] weightedQuantileLosses) {
        this.weightedQuantileLosses = weightedQuantileLosses;
        return this;
    }
}