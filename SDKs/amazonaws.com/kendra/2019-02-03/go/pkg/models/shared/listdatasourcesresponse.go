package shared

type ListDataSourcesResponse struct {
	NextToken    *string             `json:"NextToken,omitempty"`
	SummaryItems []DataSourceSummary `json:"SummaryItems,omitempty"`
}
