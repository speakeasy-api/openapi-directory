package shared

type ReportFilter struct {
	Links            *ReportFilterLinks     `json:"links,omitempty"`
	Parameters       ReportFilterParameters `json:"parameters"`
	ReportFilterID   string                 `json:"reportFilterId"`
	ReportFilterName string                 `json:"reportFilterName"`
}
