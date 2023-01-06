package shared

// PortRange1
// A complex type for a range of ports for a listener.
type PortRange1 struct {
	FromPort *int64 `json:"FromPort,omitempty"`
	ToPort   *int64 `json:"ToPort,omitempty"`
}
