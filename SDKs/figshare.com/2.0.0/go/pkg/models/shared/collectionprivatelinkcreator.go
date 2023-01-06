package shared

type CollectionPrivateLinkCreator struct {
	ExpiresDate *string `json:"expires_date,omitempty"`
	ReadOnly    *bool   `json:"read_only,omitempty"`
}
