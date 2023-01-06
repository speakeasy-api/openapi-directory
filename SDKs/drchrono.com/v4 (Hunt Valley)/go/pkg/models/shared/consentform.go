package shared

type ConsentForm struct {
	Archived        *bool   `json:"archived,omitempty"`
	AssignByDefault bool    `json:"assign_by_default"`
	CreatedAt       *string `json:"created_at,omitempty"`
	Doctor          int64   `json:"doctor"`
	ID              *int64  `json:"id,omitempty"`
	IsMandatory     bool    `json:"is_mandatory"`
	Order           *int64  `json:"order,omitempty"`
	Title           string  `json:"title"`
	UpdatedAt       *string `json:"updated_at,omitempty"`
	URI             string  `json:"uri"`
}
