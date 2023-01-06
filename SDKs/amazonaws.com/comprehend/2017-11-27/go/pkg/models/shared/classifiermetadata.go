package shared

// ClassifierMetadata
// Provides information about a document classifier.
type ClassifierMetadata struct {
	EvaluationMetrics        *ClassifierEvaluationMetrics `json:"EvaluationMetrics,omitempty"`
	NumberOfLabels           map[string]interface{}       `json:"NumberOfLabels,omitempty"`
	NumberOfTestDocuments    *int64                       `json:"NumberOfTestDocuments,omitempty"`
	NumberOfTrainedDocuments *int64                       `json:"NumberOfTrainedDocuments,omitempty"`
}
