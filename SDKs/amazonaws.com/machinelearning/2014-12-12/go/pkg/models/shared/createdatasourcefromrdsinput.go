package shared

type CreateDataSourceFromRdsInput struct {
	ComputeStatistics *bool       `json:"ComputeStatistics,omitempty"`
	DataSourceID      string      `json:"DataSourceId"`
	DataSourceName    *string     `json:"DataSourceName,omitempty"`
	RDSData           RdsDataSpec `json:"RDSData"`
	RoleARN           string      `json:"RoleARN"`
}
