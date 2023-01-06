package shared

// UserInfo
// Information about a single user.
type UserInfo struct {
	Admin       *bool   `json:"admin,omitempty"`
	Developer   *bool   `json:"developer,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Username    *string `json:"username,omitempty"`
	Viewer      *bool   `json:"viewer,omitempty"`
}
