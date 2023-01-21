package shared

// AnomalyScore
// Quantifies the anomaly. The higher score means that it's more anomalous.
type AnomalyScore struct {
	CurrentScore float64 `json:"CurrentScore"`
	MaxScore     float64 `json:"MaxScore"`
}
