package shared

type ListGroupMembersRequest struct {
	GroupID        string                 `json:"GroupId"`
	MaxResults     *int64                 `json:"MaxResults,omitempty"`
	NextToken      map[string]interface{} `json:"NextToken,omitempty"`
	OrganizationID string                 `json:"OrganizationId"`
}
