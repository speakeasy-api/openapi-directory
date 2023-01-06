package shared

type GetImportationReportResponseProductMetrics struct {
	ActiveCount     int64 `json:"activeCount"`
	DetectedCount   int64 `json:"detectedCount"`
	DuplicatedCount int64 `json:"duplicatedCount"`
	FailedCount     int64 `json:"failedCount"`
}
