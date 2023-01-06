package shared

type FileCreator struct {
	Link *string `json:"link,omitempty"`
	Md5  *string `json:"md5,omitempty"`
	Name *string `json:"name,omitempty"`
	Size *int64  `json:"size,omitempty"`
}
