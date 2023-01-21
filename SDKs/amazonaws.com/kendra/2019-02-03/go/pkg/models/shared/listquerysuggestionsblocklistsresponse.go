package shared

type ListQuerySuggestionsBlockListsResponse struct {
	BlockListSummaryItems []QuerySuggestionsBlockListSummary `json:"BlockListSummaryItems,omitempty"`
	NextToken             *string                            `json:"NextToken,omitempty"`
}
