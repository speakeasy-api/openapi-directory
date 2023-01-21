package shared

// AuthenticationConfiguration
// Provides the configuration information to connect to websites that require user authentication.
type AuthenticationConfiguration struct {
	BasicAuthentication []BasicAuthenticationConfiguration `json:"BasicAuthentication,omitempty"`
}
