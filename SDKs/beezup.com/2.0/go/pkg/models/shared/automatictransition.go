package shared

type AutomaticTransition struct {
	AccountID                int32  `json:"accountId"`
	Enabled                  bool   `json:"enabled"`
	MarketplaceTechnicalCode string `json:"marketplaceTechnicalCode"`
	OrderStatusTransitionID  int32  `json:"orderStatusTransitionId"`
}
