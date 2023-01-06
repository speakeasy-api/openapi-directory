package shared

type RestoreSecretResponse struct {
	ARN  *string `json:"ARN,omitempty"`
	Name *string `json:"Name,omitempty"`
}
