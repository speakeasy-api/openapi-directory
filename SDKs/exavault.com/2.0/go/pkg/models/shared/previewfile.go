package shared

type PreviewFileAttributes struct {
	Image     *string `json:"image,omitempty"`
	ImageHash *string `json:"imageHash,omitempty"`
	PageCount *int32  `json:"pageCount,omitempty"`
	Size      *int64  `json:"size,omitempty"`
}

// PreviewFile
// Object with preview image properties.
type PreviewFile struct {
	Attributes *PreviewFileAttributes `json:"attributes,omitempty"`
	ID         *int64                 `json:"id,omitempty"`
	Type       *string                `json:"type,omitempty"`
}
