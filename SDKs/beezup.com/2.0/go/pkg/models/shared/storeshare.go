package shared

type StoreShare struct {
	Links    StoreShareLinks   `json:"links"`
	UserID   string            `json:"userId"`
	UserRole StoreUserRoleEnum `json:"userRole"`
}
