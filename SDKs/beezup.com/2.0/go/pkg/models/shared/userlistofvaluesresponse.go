package shared

type UserListOfValuesResponse struct {
	Items []BeezUpCommonListOfValueItem  `json:"items,omitempty"`
	Links *UserListOfValuesResponseLinks `json:"links,omitempty"`
}
