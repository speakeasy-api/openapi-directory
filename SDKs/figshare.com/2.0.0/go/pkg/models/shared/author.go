package shared

type Author struct {
	FullName *string `json:"full_name,omitempty"`
	ID       *int64  `json:"id,omitempty"`
	IsActive *bool   `json:"is_active,omitempty"`
	OrcidID  *string `json:"orcid_id,omitempty"`
	URLName  *string `json:"url_name,omitempty"`
}
