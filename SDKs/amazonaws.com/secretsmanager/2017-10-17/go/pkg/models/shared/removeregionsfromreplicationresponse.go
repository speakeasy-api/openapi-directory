package shared

type RemoveRegionsFromReplicationResponse struct {
	ARN               *string                 `json:"ARN,omitempty"`
	ReplicationStatus []ReplicationStatusType `json:"ReplicationStatus,omitempty"`
}
