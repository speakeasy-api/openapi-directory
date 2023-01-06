package shared

type ListSecretVersionIdsResponse struct {
	ARN       *string                   `json:"ARN,omitempty"`
	Name      *string                   `json:"Name,omitempty"`
	NextToken *string                   `json:"NextToken,omitempty"`
	Versions  []SecretVersionsListEntry `json:"Versions,omitempty"`
}
