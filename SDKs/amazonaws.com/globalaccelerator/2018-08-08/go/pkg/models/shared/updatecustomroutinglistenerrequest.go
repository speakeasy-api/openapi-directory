package shared

type UpdateCustomRoutingListenerRequest struct {
	ListenerArn string       `json:"ListenerArn"`
	PortRanges  []PortRange1 `json:"PortRanges"`
}
