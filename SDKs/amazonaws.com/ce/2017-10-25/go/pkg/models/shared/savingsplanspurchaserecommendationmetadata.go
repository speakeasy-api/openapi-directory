package shared

// SavingsPlansPurchaseRecommendationMetadata
// Metadata about your Savings Plans Purchase Recommendations.
type SavingsPlansPurchaseRecommendationMetadata struct {
	AdditionalMetadata  *string `json:"AdditionalMetadata,omitempty"`
	GenerationTimestamp *string `json:"GenerationTimestamp,omitempty"`
	RecommendationID    *string `json:"RecommendationId,omitempty"`
}
