package shared

type ListLicenseManagerReportGeneratorsRequest struct {
	Filters    []Filter1 `json:"Filters,omitempty"`
	MaxResults *int64    `json:"MaxResults,omitempty"`
	NextToken  *string   `json:"NextToken,omitempty"`
}
