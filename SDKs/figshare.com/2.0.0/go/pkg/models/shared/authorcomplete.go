package shared

type AuthorComplete struct {
	FirstName     *string `json:"first_name,omitempty"`
	FullName      *string `json:"full_name,omitempty"`
	GroupID       *int64  `json:"group_id,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	InstitutionID *int64  `json:"institution_id,omitempty"`
	IsActive      *bool   `json:"is_active,omitempty"`
	IsPublic      *int64  `json:"is_public,omitempty"`
	JobTitle      *string `json:"job_title,omitempty"`
	LastName      *string `json:"last_name,omitempty"`
	OrcidID       *string `json:"orcid_id,omitempty"`
	URLName       *string `json:"url_name,omitempty"`
}
