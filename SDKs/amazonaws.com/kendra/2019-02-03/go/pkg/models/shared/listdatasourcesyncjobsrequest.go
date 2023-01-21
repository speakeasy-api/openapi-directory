package shared

type ListDataSourceSyncJobsRequest struct {
	ID              string                       `json:"Id"`
	IndexID         string                       `json:"IndexId"`
	MaxResults      *int64                       `json:"MaxResults,omitempty"`
	NextToken       *string                      `json:"NextToken,omitempty"`
	StartTimeFilter *TimeRange                   `json:"StartTimeFilter,omitempty"`
	StatusFilter    *DataSourceSyncJobStatusEnum `json:"StatusFilter,omitempty"`
}
