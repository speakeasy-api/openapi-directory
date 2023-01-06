package shared

type SubscriptionLinks struct {
	Activate   *Link3 `json:"activate,omitempty"`
	Deactivate *Link3 `json:"deactivate,omitempty"`
	Delete     *Link3 `json:"delete,omitempty"`
	Reporting  *Link3 `json:"reporting,omitempty"`
	Retry      *Link3 `json:"retry,omitempty"`
}
