package shared

// CustomFieldSettingResponse
// A generic Asana Resource, containing a globally unique identifier.
type CustomFieldSettingResponse struct {
	CustomField map[string]interface{} `json:"custom_field,omitempty"`
	IsImportant *bool                  `json:"is_important,omitempty"`
	Parent      map[string]interface{} `json:"parent,omitempty"`
	Project     map[string]interface{} `json:"project,omitempty"`
}
