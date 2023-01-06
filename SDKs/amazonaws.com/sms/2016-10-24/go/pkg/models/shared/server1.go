package shared

// Server1
// Represents a server.
type Server1 struct {
	ReplicationJobID         *string         `json:"replicationJobId,omitempty"`
	ReplicationJobTerminated *bool           `json:"replicationJobTerminated,omitempty"`
	ServerID                 *string         `json:"serverId,omitempty"`
	ServerType               *ServerTypeEnum `json:"serverType,omitempty"`
	VMServer                 *VMServer1      `json:"vmServer,omitempty"`
}
