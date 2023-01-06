package shared

type CreateDatasetExportJobRequest struct {
	DatasetArn    string                 `json:"datasetArn"`
	IngestionMode map[string]interface{} `json:"ingestionMode,omitempty"`
	JobName       string                 `json:"jobName"`
	JobOutput     DatasetExportJobOutput `json:"jobOutput"`
	RoleArn       string                 `json:"roleArn"`
}
