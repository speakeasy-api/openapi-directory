package shared

// UpdateConnectionOAuthRequestParameters
// Contains the OAuth request parameters to use for the connection.
type UpdateConnectionOAuthRequestParameters struct {
	AuthorizationEndpoint map[string]interface{}                        `json:"AuthorizationEndpoint,omitempty"`
	ClientParameters      *UpdateConnectionOAuthClientRequestParameters `json:"ClientParameters,omitempty"`
	HTTPMethod            *ConnectionOAuthHTTPMethodEnum                `json:"HttpMethod,omitempty"`
	OAuthHTTPParameters   *ConnectionHTTPParameters                     `json:"OAuthHttpParameters,omitempty"`
}
