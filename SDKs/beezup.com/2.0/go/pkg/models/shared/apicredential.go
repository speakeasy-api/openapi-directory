package shared

// APICredential
// Your api credential
type APICredential struct {
	PrimaryToken   *string `json:"primaryToken,omitempty"`
	ProductName    *string `json:"productName,omitempty"`
	SecondaryToken *string `json:"secondaryToken,omitempty"`
}
