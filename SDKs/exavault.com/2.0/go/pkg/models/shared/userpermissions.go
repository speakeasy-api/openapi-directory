package shared

type UserPermissions struct {
	ChangePassword bool `json:"changePassword"`
	Delete         bool `json:"delete"`
	DeleteFormData bool `json:"deleteFormData"`
	Download       bool `json:"download"`
	List           bool `json:"list"`
	Modify         bool `json:"modify"`
	Notification   bool `json:"notification"`
	Share          bool `json:"share"`
	Upload         bool `json:"upload"`
	ViewFormData   bool `json:"viewFormData"`
}
