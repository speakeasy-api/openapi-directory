package shared

type ListDataSourceSyncJobsResponse struct {
	History   []DataSourceSyncJob `json:"History,omitempty"`
	NextToken *string             `json:"NextToken,omitempty"`
}
