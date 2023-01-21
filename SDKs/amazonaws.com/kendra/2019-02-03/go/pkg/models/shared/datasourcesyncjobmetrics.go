package shared

// DataSourceSyncJobMetrics
// Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector.
type DataSourceSyncJobMetrics struct {
	DocumentsAdded    *string `json:"DocumentsAdded,omitempty"`
	DocumentsDeleted  *string `json:"DocumentsDeleted,omitempty"`
	DocumentsFailed   *string `json:"DocumentsFailed,omitempty"`
	DocumentsModified *string `json:"DocumentsModified,omitempty"`
	DocumentsScanned  *string `json:"DocumentsScanned,omitempty"`
}
