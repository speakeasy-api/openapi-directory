package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccuracyMetricsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoMLOverrideStrategy")
    public AutoMlOverrideStrategyEnum autoMLOverrideStrategy;
    public GetAccuracyMetricsResponse withAutoMlOverrideStrategy(AutoMlOverrideStrategyEnum autoMLOverrideStrategy) {
        this.autoMLOverrideStrategy = autoMLOverrideStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptimizationMetric")
    public OptimizationMetricEnum optimizationMetric;
    public GetAccuracyMetricsResponse withOptimizationMetric(OptimizationMetricEnum optimizationMetric) {
        this.optimizationMetric = optimizationMetric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictorEvaluationResults")
    public EvaluationResult[] predictorEvaluationResults;
    public GetAccuracyMetricsResponse withPredictorEvaluationResults(EvaluationResult[] predictorEvaluationResults) {
        this.predictorEvaluationResults = predictorEvaluationResults;
        return this;
    }
}