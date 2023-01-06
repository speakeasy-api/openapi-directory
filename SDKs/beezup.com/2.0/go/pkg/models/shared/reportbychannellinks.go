package shared

type ReportByChannelLinks struct {
	DisableProducts map[string]interface{} `json:"disableProducts,omitempty"`
	EnableProducts  map[string]interface{} `json:"enableProducts,omitempty"`
}
