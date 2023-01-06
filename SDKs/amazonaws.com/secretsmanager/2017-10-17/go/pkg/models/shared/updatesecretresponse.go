package shared

type UpdateSecretResponse struct {
	ARN       *string `json:"ARN,omitempty"`
	Name      *string `json:"Name,omitempty"`
	VersionID *string `json:"VersionId,omitempty"`
}
