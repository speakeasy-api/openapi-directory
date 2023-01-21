package shared

type GetRightsizingRecommendationRequest struct {
	Configuration *RightsizingRecommendationConfiguration `json:"Configuration,omitempty"`
	Filter        *Expression                             `json:"Filter,omitempty"`
	NextPageToken *string                                 `json:"NextPageToken,omitempty"`
	PageSize      *int64                                  `json:"PageSize,omitempty"`
	Service       string                                  `json:"Service"`
}
