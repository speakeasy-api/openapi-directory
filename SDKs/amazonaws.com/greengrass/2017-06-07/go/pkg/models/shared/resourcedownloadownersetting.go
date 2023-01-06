package shared

// ResourceDownloadOwnerSetting
// The owner setting for downloaded machine learning resources.
type ResourceDownloadOwnerSetting struct {
	GroupOwner      map[string]interface{} `json:"GroupOwner"`
	GroupPermission PermissionEnum         `json:"GroupPermission"`
}
