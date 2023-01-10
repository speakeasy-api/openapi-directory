package shared

type ProfilePictureInfoResponseLinks struct {
	Save LinksSaveProfilePictureInfoLink `json:"save"`
	Self LinksGetProfilePictureInfoLink  `json:"self"`
}
