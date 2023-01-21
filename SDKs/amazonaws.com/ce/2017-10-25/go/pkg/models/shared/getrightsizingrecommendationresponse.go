package shared

type GetRightsizingRecommendationResponse struct {
	Configuration              *RightsizingRecommendationConfiguration `json:"Configuration,omitempty"`
	Metadata                   *RightsizingRecommendationMetadata      `json:"Metadata,omitempty"`
	NextPageToken              *string                                 `json:"NextPageToken,omitempty"`
	RightsizingRecommendations []RightsizingRecommendation             `json:"RightsizingRecommendations,omitempty"`
	Summary                    *RightsizingRecommendationSummary       `json:"Summary,omitempty"`
}
