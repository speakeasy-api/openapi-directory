package shared

type User struct {
	FirstName *string `json:"first_name,omitempty"`
	ID        *int64  `json:"id,omitempty"`
	IsActive  *bool   `json:"is_active,omitempty"`
	IsPublic  *bool   `json:"is_public,omitempty"`
	JobTitle  *string `json:"job_title,omitempty"`
	LastName  *string `json:"last_name,omitempty"`
	Name      *string `json:"name,omitempty"`
	OrcidID   *string `json:"orcid_id,omitempty"`
	URLName   *string `json:"url_name,omitempty"`
}
