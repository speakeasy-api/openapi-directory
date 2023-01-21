package shared

type DescribePrincipalMappingRequest struct {
	DataSourceID *string `json:"DataSourceId,omitempty"`
	GroupID      string  `json:"GroupId"`
	IndexID      string  `json:"IndexId"`
}
