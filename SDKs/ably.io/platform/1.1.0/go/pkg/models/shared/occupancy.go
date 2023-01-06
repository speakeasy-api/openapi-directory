package shared

// Occupancy
// An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
type Occupancy struct {
	PresenceConnections *int64 `json:"presenceConnections,omitempty"`
	PresenceMembers     *int64 `json:"presenceMembers,omitempty"`
	PresenceSubscribers *int64 `json:"presenceSubscribers,omitempty"`
	Publishers          *int64 `json:"publishers,omitempty"`
	Subscribers         *int64 `json:"subscribers,omitempty"`
}
