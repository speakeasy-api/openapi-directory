package shared

type Category struct {
	ID       *int64  `json:"id,omitempty"`
	ParentID *int64  `json:"parent_id,omitempty"`
	Title    *string `json:"title,omitempty"`
}
