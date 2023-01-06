package shared

type ReportByCommonResponseLinks struct {
	DisableAllProducts map[string]interface{} `json:"disableAllProducts,omitempty"`
	DisableProducts    map[string]interface{} `json:"disableProducts,omitempty"`
	EnableAllProducts  map[string]interface{} `json:"enableAllProducts,omitempty"`
	EnableProducts     map[string]interface{} `json:"enableProducts,omitempty"`
}
