package shared

type GetReservationPurchaseRecommendationResponse struct {
	Metadata        *ReservationPurchaseRecommendationMetadata `json:"Metadata,omitempty"`
	NextPageToken   *string                                    `json:"NextPageToken,omitempty"`
	Recommendations []ReservationPurchaseRecommendation        `json:"Recommendations,omitempty"`
}
