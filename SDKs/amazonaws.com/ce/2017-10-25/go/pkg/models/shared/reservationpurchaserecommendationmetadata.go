package shared

// ReservationPurchaseRecommendationMetadata
// Information about this specific recommendation, such as the timestamp for when Amazon Web Services made a specific recommendation.
type ReservationPurchaseRecommendationMetadata struct {
	GenerationTimestamp *string `json:"GenerationTimestamp,omitempty"`
	RecommendationID    *string `json:"RecommendationId,omitempty"`
}
