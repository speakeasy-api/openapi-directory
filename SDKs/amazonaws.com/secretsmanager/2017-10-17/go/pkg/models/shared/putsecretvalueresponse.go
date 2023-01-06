package shared

type PutSecretValueResponse struct {
	ARN           *string  `json:"ARN,omitempty"`
	Name          *string  `json:"Name,omitempty"`
	VersionID     *string  `json:"VersionId,omitempty"`
	VersionStages []string `json:"VersionStages,omitempty"`
}
