package shared

// BackendAuthSocialProviderConfig
// Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
type BackendAuthSocialProviderConfig struct {
	ClientID     map[string]interface{} `json:"ClientId,omitempty"`
	ClientSecret map[string]interface{} `json:"ClientSecret,omitempty"`
}
