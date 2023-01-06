package shared

type AdminListGroupsForUserResponse struct {
	Groups    map[string]interface{} `json:"Groups,omitempty"`
	NextToken *string                `json:"NextToken,omitempty"`
}
