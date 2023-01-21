package shared

// ScoreAttributes
// Provides a relative ranking that indicates how confident Amazon Kendra is that the response matches the query.
type ScoreAttributes struct {
	ScoreConfidence *ScoreConfidenceEnum `json:"ScoreConfidence,omitempty"`
}
