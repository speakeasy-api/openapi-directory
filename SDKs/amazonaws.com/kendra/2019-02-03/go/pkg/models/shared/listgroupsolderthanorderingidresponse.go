package shared

type ListGroupsOlderThanOrderingIDResponse struct {
	GroupsSummaries []GroupSummary `json:"GroupsSummaries,omitempty"`
	NextToken       *string        `json:"NextToken,omitempty"`
}
