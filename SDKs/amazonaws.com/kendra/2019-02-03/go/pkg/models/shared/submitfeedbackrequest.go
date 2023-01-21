package shared

type SubmitFeedbackRequest struct {
	ClickFeedbackItems     []ClickFeedback     `json:"ClickFeedbackItems,omitempty"`
	IndexID                string              `json:"IndexId"`
	QueryID                string              `json:"QueryId"`
	RelevanceFeedbackItems []RelevanceFeedback `json:"RelevanceFeedbackItems,omitempty"`
}
