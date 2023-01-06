package shared

type ReplicateSecretToRegionsResponse struct {
	ARN               *string                 `json:"ARN,omitempty"`
	ReplicationStatus []ReplicationStatusType `json:"ReplicationStatus,omitempty"`
}
