package shared

type ListIndicesResponse struct {
	IndexConfigurationSummaryItems []IndexConfigurationSummary `json:"IndexConfigurationSummaryItems,omitempty"`
	NextToken                      *string                     `json:"NextToken,omitempty"`
}
