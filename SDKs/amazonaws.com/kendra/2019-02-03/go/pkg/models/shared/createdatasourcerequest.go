package shared

type CreateDataSourceRequest struct {
	ClientToken   *string                  `json:"ClientToken,omitempty"`
	Configuration *DataSourceConfiguration `json:"Configuration,omitempty"`
	Description   *string                  `json:"Description,omitempty"`
	IndexID       string                   `json:"IndexId"`
	Name          string                   `json:"Name"`
	RoleArn       *string                  `json:"RoleArn,omitempty"`
	Schedule      *string                  `json:"Schedule,omitempty"`
	Tags          []Tag                    `json:"Tags,omitempty"`
	Type          DataSourceTypeEnum       `json:"Type"`
}
