package shared

// TerminateRecommendationDetail
// Details on termination recommendation.
type TerminateRecommendationDetail struct {
	CurrencyCode            *string `json:"CurrencyCode,omitempty"`
	EstimatedMonthlySavings *string `json:"EstimatedMonthlySavings,omitempty"`
}
