package shared

type DescribeHubResponse struct {
	AutoEnableControls *bool                  `json:"AutoEnableControls,omitempty"`
	HubArn             map[string]interface{} `json:"HubArn,omitempty"`
	SubscribedAt       *string                `json:"SubscribedAt,omitempty"`
}
