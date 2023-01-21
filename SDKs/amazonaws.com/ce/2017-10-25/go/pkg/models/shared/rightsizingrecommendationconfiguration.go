package shared

// RightsizingRecommendationConfiguration
// You can use <code>RightsizingRecommendationConfiguration</code> to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or RI benefits, or neither.
type RightsizingRecommendationConfiguration struct {
	BenefitsConsidered   bool                     `json:"BenefitsConsidered"`
	RecommendationTarget RecommendationTargetEnum `json:"RecommendationTarget"`
}
