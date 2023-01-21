package shared

type ProvideAnomalyFeedbackRequest struct {
	AnomalyID string                  `json:"AnomalyId"`
	Feedback  AnomalyFeedbackTypeEnum `json:"Feedback"`
}
