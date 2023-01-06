package shared

type ListDiscoveredResourcesResult struct {
	DiscoveredResourceList []DiscoveredResource1 `json:"DiscoveredResourceList,omitempty"`
	NextToken              *string               `json:"NextToken,omitempty"`
}
