package shared

type CreateSecretResponse struct {
	ARN               *string                 `json:"ARN,omitempty"`
	Name              *string                 `json:"Name,omitempty"`
	ReplicationStatus []ReplicationStatusType `json:"ReplicationStatus,omitempty"`
	VersionID         *string                 `json:"VersionId,omitempty"`
}
