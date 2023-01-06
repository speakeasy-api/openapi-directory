package shared

// ListenerPortMapping
// An object representing a virtual node listener port mapping.
type ListenerPortMapping struct {
	Port     *int64            `json:"port,omitempty"`
	Protocol *PortProtocolEnum `json:"protocol,omitempty"`
}

// Listener
// An object representing a listener for a virtual node.
type Listener struct {
	HealthCheck *HealthCheckPolicy   `json:"healthCheck,omitempty"`
	PortMapping *ListenerPortMapping `json:"portMapping,omitempty"`
}
