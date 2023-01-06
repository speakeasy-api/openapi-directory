package shared

// ZendeskToken
// JWT token to access Zendesk restricted help center
type ZendeskToken struct {
	Token *string `json:"token,omitempty"`
}
