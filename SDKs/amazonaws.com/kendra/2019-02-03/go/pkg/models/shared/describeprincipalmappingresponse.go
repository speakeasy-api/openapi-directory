package shared

type DescribePrincipalMappingResponse struct {
	DataSourceID             *string                  `json:"DataSourceId,omitempty"`
	GroupID                  *string                  `json:"GroupId,omitempty"`
	GroupOrderingIDSummaries []GroupOrderingIDSummary `json:"GroupOrderingIdSummaries,omitempty"`
	IndexID                  *string                  `json:"IndexId,omitempty"`
}
