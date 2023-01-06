package shared

type ReportFilterList struct {
	Links         ReportFiltersLinks   `json:"links"`
	ReportFilters []ReportFilterHeader `json:"reportFilters"`
}
