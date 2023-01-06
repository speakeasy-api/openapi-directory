package shared

type ListTokensRequest struct {
	Filters    []Filter1 `json:"Filters,omitempty"`
	MaxResults *int64    `json:"MaxResults,omitempty"`
	NextToken  *string   `json:"NextToken,omitempty"`
	TokenIds   []string  `json:"TokenIds,omitempty"`
}
