package shared

// ServerReplicationConfiguration1
// Replication configuration of a server.
type ServerReplicationConfiguration1 struct {
	Server                      *Server1                     `json:"server,omitempty"`
	ServerReplicationParameters *ServerReplicationParameters `json:"serverReplicationParameters,omitempty"`
}
