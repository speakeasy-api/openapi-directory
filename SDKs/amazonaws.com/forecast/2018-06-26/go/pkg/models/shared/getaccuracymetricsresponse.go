package shared

type GetAccuracyMetricsResponse struct {
	AutoMLOverrideStrategy     *AutoMlOverrideStrategyEnum `json:"AutoMLOverrideStrategy,omitempty"`
	OptimizationMetric         *OptimizationMetricEnum     `json:"OptimizationMetric,omitempty"`
	PredictorEvaluationResults []EvaluationResult          `json:"PredictorEvaluationResults,omitempty"`
}
