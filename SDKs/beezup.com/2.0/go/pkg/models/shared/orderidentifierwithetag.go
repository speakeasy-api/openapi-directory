package shared

type OrderIdentifierWithETag struct {
	AccountID                int32  `json:"accountId"`
	BeezUPOrderID            string `json:"beezUPOrderId"`
	Etag                     string `json:"etag"`
	MarketplaceTechnicalCode string `json:"marketplaceTechnicalCode"`
}
