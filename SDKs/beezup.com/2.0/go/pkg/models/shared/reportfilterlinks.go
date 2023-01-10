package shared

// ReportFilterLinks
// Indicates the actions you can do on this report filter
type ReportFilterLinks struct {
	Delete *LinksDeleteReportFilterLink `json:"delete,omitempty"`
	Save   *LinksSaveReportFilterLink   `json:"save,omitempty"`
	Self   *LinksGetReportFilterLink    `json:"self,omitempty"`
}
