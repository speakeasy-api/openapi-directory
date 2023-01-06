package shared

type PublicListOfValuesResponse struct {
	Items []BeezUpCommonListOfValueItem    `json:"items,omitempty"`
	Links *PublicListOfValuesResponseLinks `json:"links,omitempty"`
}
