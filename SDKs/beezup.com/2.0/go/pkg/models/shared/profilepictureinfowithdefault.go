package shared

type ProfilePictureInfoWithDefault struct {
	GravatarProfilePictureURL string                     `json:"gravatarProfilePictureUrl"`
	InitialsProfilePictureURL string                     `json:"initialsProfilePictureUrl"`
	ProfilePictureSelected    ProfilePictureSelectedEnum `json:"profilePictureSelected"`
	ProfilePictureURL         *string                    `json:"profilePictureUrl,omitempty"`
}
