package shared

// Error
// Returned error from failed REST.
type Error struct {
	Code       *int64  `json:"code,omitempty"`
	Href       *string `json:"href,omitempty"`
	Message    *string `json:"message,omitempty"`
	ServerID   *string `json:"serverId,omitempty"`
	StatusCode *int64  `json:"statusCode,omitempty"`
}
