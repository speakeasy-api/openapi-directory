package shared

// EvaluationMetrics1
// Evaluation metrics provide an estimate of the quality of your machine learning transform.
type EvaluationMetrics1 struct {
	FindMatchesMetrics *FindMatchesMetrics1 `json:"FindMatchesMetrics,omitempty"`
	TransformType      TransformTypeEnum    `json:"TransformType"`
}
