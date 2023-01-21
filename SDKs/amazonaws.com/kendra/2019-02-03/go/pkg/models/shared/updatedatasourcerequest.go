package shared

type UpdateDataSourceRequest struct {
	Configuration *DataSourceConfiguration `json:"Configuration,omitempty"`
	Description   *string                  `json:"Description,omitempty"`
	ID            string                   `json:"Id"`
	IndexID       string                   `json:"IndexId"`
	Name          *string                  `json:"Name,omitempty"`
	RoleArn       *string                  `json:"RoleArn,omitempty"`
	Schedule      *string                  `json:"Schedule,omitempty"`
}
