package shared

type ClearMerchantOrderInfoListRequest struct {
	Orders []OrderIdentifier `json:"orders"`
}
