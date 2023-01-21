package shared

type GetSavingsPlansPurchaseRecommendationResponse struct {
	Metadata                           *SavingsPlansPurchaseRecommendationMetadata `json:"Metadata,omitempty"`
	NextPageToken                      *string                                     `json:"NextPageToken,omitempty"`
	SavingsPlansPurchaseRecommendation *SavingsPlansPurchaseRecommendation         `json:"SavingsPlansPurchaseRecommendation,omitempty"`
}
