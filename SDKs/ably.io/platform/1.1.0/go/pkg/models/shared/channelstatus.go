package shared

// ChannelStatus
// A ChannelStatus instance.
type ChannelStatus struct {
	IsActive  bool       `json:"isActive"`
	Occupancy *Occupancy `json:"occupancy,omitempty"`
}
