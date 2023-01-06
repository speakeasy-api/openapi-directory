package shared

// GetImportationReportResponse
// Get Importation Report Response
type GetImportationReportResponse struct {
	Categories      *GetImportationReportResponseDiff           `json:"categories,omitempty"`
	Columns         *GetImportationReportResponseDiff           `json:"columns,omitempty"`
	Errors          []GetImportationReportResponseError         `json:"errors"`
	ExecutionID     string                                      `json:"executionId"`
	ImportationInfo GetImportationReportResponseImportationInfo `json:"importationInfo"`
	ProductMetrics  *GetImportationReportResponseProductMetrics `json:"productMetrics,omitempty"`
	Products        *GetImportationReportResponseDiff           `json:"products,omitempty"`
}
