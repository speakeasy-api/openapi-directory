package shared

type FullItemSections struct {
	ID    *string `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
}

type FullItemInput struct {
	Fields   []FieldInput       `json:"fields,omitempty"`
	Files    []FileInput        `json:"files,omitempty"`
	Sections []FullItemSections `json:"sections,omitempty"`
}

type FullItem struct {
	Fields   []Field            `json:"fields,omitempty"`
	Files    []File             `json:"files,omitempty"`
	Sections []FullItemSections `json:"sections,omitempty"`
}
