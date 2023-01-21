package shared

// RelevanceFeedback
// Provides feedback on how relevant a document is to a search. Your application uses the <code>SubmitFeedback</code> operation to provide relevance information.
type RelevanceFeedback struct {
	RelevanceValue RelevanceTypeEnum `json:"RelevanceValue"`
	ResultID       string            `json:"ResultId"`
}
