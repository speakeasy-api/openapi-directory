package shared

type ListReceivedGrantsRequest struct {
	Filters    []Filter1 `json:"Filters,omitempty"`
	GrantArns  []string  `json:"GrantArns,omitempty"`
	MaxResults *int64    `json:"MaxResults,omitempty"`
	NextToken  *string   `json:"NextToken,omitempty"`
}
