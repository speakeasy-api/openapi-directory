package shared

// UserResponse
// Response object for users.
type UserResponse struct {
	Data           *User         `json:"data,omitempty"`
	Included       []interface{} `json:"included,omitempty"`
	ResponseStatus *int64        `json:"responseStatus,omitempty"`
}
