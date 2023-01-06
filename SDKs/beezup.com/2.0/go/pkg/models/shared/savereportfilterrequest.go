package shared

type SaveReportFilterRequest struct {
	Parameters       ReportFilterParameters `json:"parameters"`
	ReportFilterName string                 `json:"reportFilterName"`
}
