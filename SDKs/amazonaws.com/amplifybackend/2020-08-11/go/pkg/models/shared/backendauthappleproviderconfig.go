package shared

// BackendAuthAppleProviderConfig
// Describes Apple social federation configurations for allowing your app users to sign in using OAuth.
type BackendAuthAppleProviderConfig struct {
	ClientID   map[string]interface{} `json:"ClientId,omitempty"`
	KeyID      map[string]interface{} `json:"KeyId,omitempty"`
	PrivateKey map[string]interface{} `json:"PrivateKey,omitempty"`
	TeamID     map[string]interface{} `json:"TeamId,omitempty"`
}
