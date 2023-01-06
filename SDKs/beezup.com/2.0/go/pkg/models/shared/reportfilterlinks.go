package shared

// ReportFilterLinks
// Indicates the actions you can do on this report filter
type ReportFilterLinks struct {
	Delete map[string]interface{} `json:"delete,omitempty"`
	Save   map[string]interface{} `json:"save,omitempty"`
	Self   map[string]interface{} `json:"self,omitempty"`
}
