package shared

type UserDetailsTypeEnum string

const (
	UserDetailsTypeEnumUser  UserDetailsTypeEnum = "user"
	UserDetailsTypeEnumGuest UserDetailsTypeEnum = "guest"
)

// UserDetails
// Public User details summary
type UserDetails struct {
	CoverPictureFile *string              `json:"coverPictureFile,omitempty"`
	ID               *string              `json:"id,omitempty"`
	Locale           *FlatLocalesEnum     `json:"locale,omitempty"`
	PictureFile      *string              `json:"pictureFile,omitempty"`
	PrivateProfile   *bool                `json:"privateProfile,omitempty"`
	Type             *UserDetailsTypeEnum `json:"type,omitempty"`
}
