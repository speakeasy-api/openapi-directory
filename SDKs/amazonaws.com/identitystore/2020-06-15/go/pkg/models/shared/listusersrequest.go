package shared

type ListUsersRequest struct {
	Filters         []Filter               `json:"Filters,omitempty"`
	IdentityStoreID string                 `json:"IdentityStoreId"`
	MaxResults      map[string]interface{} `json:"MaxResults,omitempty"`
	NextToken       *string                `json:"NextToken,omitempty"`
}
