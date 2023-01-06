package shared

type BuyRecommendationResponse struct {
	BuyRecommendations []string `json:"buyRecommendations,omitempty"`
	NumberOfProducts   *int64   `json:"numberOfProducts,omitempty"`
	ResponseMessage    *string  `json:"responseMessage,omitempty"`
	ResponseStatus     *string  `json:"responseStatus,omitempty"`
}
