package shared

type BatchDeleteDocumentRequest struct {
	DataSourceSyncJobMetricTarget *DataSourceSyncJobMetricTarget `json:"DataSourceSyncJobMetricTarget,omitempty"`
	DocumentIDList                []string                       `json:"DocumentIdList"`
	IndexID                       string                         `json:"IndexId"`
}
