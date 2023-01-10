package shared

type SetMerchantOrderInfoListRequestItem struct {
	AccountID                int32  `json:"accountId"`
	BeezUPOrderID            string `json:"beezUPOrderId"`
	MarketplaceTechnicalCode string `json:"marketplaceTechnicalCode"`
	OrderMerchantOrderID     string `json:"order_MerchantOrderId"`
}
