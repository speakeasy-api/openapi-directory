package shared

type ProfilePictureInfoResponse struct {
	Links              ProfilePictureInfoResponseLinks `json:"links"`
	ProfilePictureInfo ProfilePictureInfoWithDefault   `json:"profilePictureInfo"`
}
