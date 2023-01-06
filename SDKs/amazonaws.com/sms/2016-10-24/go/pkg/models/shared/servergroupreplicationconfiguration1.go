package shared

// ServerGroupReplicationConfiguration1
// Replication configuration for a server group.
type ServerGroupReplicationConfiguration1 struct {
	ServerGroupID                   *string                           `json:"serverGroupId,omitempty"`
	ServerReplicationConfigurations []ServerReplicationConfiguration1 `json:"serverReplicationConfigurations,omitempty"`
}
