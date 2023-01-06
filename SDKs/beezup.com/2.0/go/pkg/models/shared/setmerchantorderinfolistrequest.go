package shared

type SetMerchantOrderInfoListRequest struct {
	OrderMerchantECommerceSoftwareName    string                                `json:"order_MerchantECommerceSoftwareName"`
	OrderMerchantECommerceSoftwareVersion string                                `json:"order_MerchantECommerceSoftwareVersion"`
	Orders                                []SetMerchantOrderInfoListRequestItem `json:"orders"`
}
