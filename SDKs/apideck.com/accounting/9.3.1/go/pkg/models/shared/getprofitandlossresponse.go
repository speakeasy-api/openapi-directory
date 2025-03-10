// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GetProfitAndLossResponse - Profit & Loss Report
type GetProfitAndLossResponse struct {
	Data ProfitAndLoss `json:"data"`
	// Operation performed
	Operation string `json:"operation"`
	// Unified API resource name
	Resource string `json:"resource"`
	// Apideck ID of service provider
	Service string `json:"service"`
	// HTTP Response Status
	Status string `json:"status"`
	// HTTP Response Status Code
	StatusCode int64 `json:"status_code"`
}
