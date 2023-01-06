package shared

type DescribeTableDataImportJobResult struct {
	JobMetadata TableDataImportJobMetadata `json:"jobMetadata"`
	JobStatus   map[string]interface{}     `json:"jobStatus"`
	Message     string                     `json:"message"`
}
