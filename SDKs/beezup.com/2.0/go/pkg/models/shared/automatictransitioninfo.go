package shared

type AutomaticTransitionInfo struct {
	BeezUPOrderStatus       string                        `json:"beezUPOrderStatus"`
	BusinessOperationType   string                        `json:"businessOperationType"`
	Links                   *AutomaticTransitionInfoLinks `json:"links,omitempty"`
	MarketplaceBusinessCode string                        `json:"marketplaceBusinessCode"`
}
