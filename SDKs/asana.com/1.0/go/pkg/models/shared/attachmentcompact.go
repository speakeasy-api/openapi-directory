package shared

// AttachmentCompact
// An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
type AttachmentCompact struct {
	Gid             *string      `json:"gid,omitempty"`
	Name            *string      `json:"name,omitempty"`
	ResourceSubtype *interface{} `json:"resource_subtype,omitempty"`
	ResourceType    *string      `json:"resource_type,omitempty"`
}
