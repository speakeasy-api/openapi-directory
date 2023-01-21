package shared

// UserTokenConfiguration
// Provides configuration information for a token configuration.
type UserTokenConfiguration struct {
	JSONTokenTypeConfiguration *JSONTokenTypeConfiguration `json:"JsonTokenTypeConfiguration,omitempty"`
	JwtTokenTypeConfiguration  *JwtTokenTypeConfiguration  `json:"JwtTokenTypeConfiguration,omitempty"`
}
