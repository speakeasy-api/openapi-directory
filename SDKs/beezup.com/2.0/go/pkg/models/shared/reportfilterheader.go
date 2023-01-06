package shared

type ReportFilterHeader struct {
	Links            ReportFilterHeaderLinks `json:"links"`
	ReportFilterID   string                  `json:"reportFilterId"`
	ReportFilterName string                  `json:"reportFilterName"`
	ReportType       ReportTypeEnum          `json:"reportType"`
}
