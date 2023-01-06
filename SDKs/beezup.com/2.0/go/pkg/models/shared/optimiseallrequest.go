package shared

// OptimiseAllRequest
// Contains common filter parameters
type OptimiseAllRequest struct {
	AnalyticsProductColumnFilters *AnalyticsProductColumnFilters `json:"analyticsProductColumnFilters,omitempty"`
	ProductColumnsToDisplay       []string                       `json:"productColumnsToDisplay,omitempty"`
	ProductState                  *ProductStateFilterEnum        `json:"productState,omitempty"`
	ReportType                    ReportTypeEnum                 `json:"reportType"`
}
