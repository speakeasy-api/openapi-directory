package shared

type SetMerchantOrderInfoRequest struct {
	OrderMerchantECommerceSoftwareName    string `json:"order_MerchantECommerceSoftwareName"`
	OrderMerchantECommerceSoftwareVersion string `json:"order_MerchantECommerceSoftwareVersion"`
	OrderMerchantOrderID                  string `json:"order_MerchantOrderId"`
}
