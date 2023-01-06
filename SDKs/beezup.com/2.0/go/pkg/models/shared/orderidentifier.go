package shared

type OrderIdentifier struct {
	AccountID                int32  `json:"accountId"`
	BeezUPOrderID            string `json:"beezUPOrderId"`
	MarketplaceTechnicalCode string `json:"marketplaceTechnicalCode"`
}
