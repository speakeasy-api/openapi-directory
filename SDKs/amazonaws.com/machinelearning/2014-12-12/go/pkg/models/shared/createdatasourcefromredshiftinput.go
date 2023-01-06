package shared

type CreateDataSourceFromRedshiftInput struct {
	ComputeStatistics *bool            `json:"ComputeStatistics,omitempty"`
	DataSourceID      string           `json:"DataSourceId"`
	DataSourceName    *string          `json:"DataSourceName,omitempty"`
	DataSpec          RedshiftDataSpec `json:"DataSpec"`
	RoleARN           string           `json:"RoleARN"`
}
