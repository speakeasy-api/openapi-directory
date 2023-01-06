package shared

// ResourceDownloadOwnerSetting1
// The owner setting for downloaded machine learning resources.
type ResourceDownloadOwnerSetting1 struct {
	GroupOwner      string         `json:"GroupOwner"`
	GroupPermission PermissionEnum `json:"GroupPermission"`
}
