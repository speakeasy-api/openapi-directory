package shared

// RightsizingRecommendationMetadata
// Metadata for this recommendation set.
type RightsizingRecommendationMetadata struct {
	AdditionalMetadata   *string                   `json:"AdditionalMetadata,omitempty"`
	GenerationTimestamp  *string                   `json:"GenerationTimestamp,omitempty"`
	LookbackPeriodInDays *LookbackPeriodInDaysEnum `json:"LookbackPeriodInDays,omitempty"`
	RecommendationID     *string                   `json:"RecommendationId,omitempty"`
}
