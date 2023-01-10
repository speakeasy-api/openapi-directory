package shared

// CustomFieldSettingCompact
// Custom Fields Settings objects represent the many-to-many join of the Custom Field and Project as well as stores information that is relevant to that particular pairing.
type CustomFieldSettingCompact struct {
	Gid          *string `json:"gid,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}
