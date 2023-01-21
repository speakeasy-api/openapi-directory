package shared

// RightsizingRecommendationSummary
// The summary of rightsizing recommendations
type RightsizingRecommendationSummary struct {
	EstimatedTotalMonthlySavingsAmount *string `json:"EstimatedTotalMonthlySavingsAmount,omitempty"`
	SavingsCurrencyCode                *string `json:"SavingsCurrencyCode,omitempty"`
	SavingsPercentage                  *string `json:"SavingsPercentage,omitempty"`
	TotalRecommendationCount           *string `json:"TotalRecommendationCount,omitempty"`
}
