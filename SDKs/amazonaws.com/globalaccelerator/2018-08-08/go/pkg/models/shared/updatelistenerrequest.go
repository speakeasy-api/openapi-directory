package shared

type UpdateListenerRequest struct {
	ClientAffinity *ClientAffinityEnum `json:"ClientAffinity,omitempty"`
	ListenerArn    string              `json:"ListenerArn"`
	PortRanges     []PortRange1        `json:"PortRanges,omitempty"`
	Protocol       *ProtocolEnum       `json:"Protocol,omitempty"`
}
