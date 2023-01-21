package shared

type DeletePrincipalMappingRequest struct {
	DataSourceID *string `json:"DataSourceId,omitempty"`
	GroupID      string  `json:"GroupId"`
	IndexID      string  `json:"IndexId"`
	OrderingID   *int64  `json:"OrderingId,omitempty"`
}
