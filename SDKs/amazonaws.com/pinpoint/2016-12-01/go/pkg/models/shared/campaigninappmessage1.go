package shared

// CampaignInAppMessage1
// In-app message configuration.
type CampaignInAppMessage1 struct {
	Body         *string                `json:"Body,omitempty"`
	Content      []InAppMessageContent1 `json:"Content,omitempty"`
	CustomConfig map[string]string      `json:"CustomConfig,omitempty"`
	Layout       *LayoutEnum            `json:"Layout,omitempty"`
}
