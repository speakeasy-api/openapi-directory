package shared

// Credential
// Provides the credentials
type Credential struct {
	Password *string `json:"password,omitempty"`
	UserName string  `json:"userName"`
}
