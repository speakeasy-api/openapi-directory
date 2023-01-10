package shared

type AutomaticTransitionInfo struct {
	AccountID                int32                         `json:"accountId"`
	BeezUPOrderStatus        string                        `json:"beezUPOrderStatus"`
	BusinessOperationType    string                        `json:"businessOperationType"`
	Enabled                  bool                          `json:"enabled"`
	Links                    *AutomaticTransitionInfoLinks `json:"links,omitempty"`
	MarketplaceBusinessCode  string                        `json:"marketplaceBusinessCode"`
	MarketplaceTechnicalCode string                        `json:"marketplaceTechnicalCode"`
	OrderStatusTransitionID  int32                         `json:"orderStatusTransitionId"`
}
