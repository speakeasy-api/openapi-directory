package shared

type SharedLinkTarget struct {
	ID   string        `json:"id"`
	Name *string       `json:"name,omitempty"`
	Type *FileTypeEnum `json:"type,omitempty"`
}
