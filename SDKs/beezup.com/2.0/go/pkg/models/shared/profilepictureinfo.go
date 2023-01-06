package shared

type ProfilePictureInfo struct {
	ProfilePictureSelected ProfilePictureSelectedEnum `json:"profilePictureSelected"`
	ProfilePictureURL      *string                    `json:"profilePictureUrl,omitempty"`
}
