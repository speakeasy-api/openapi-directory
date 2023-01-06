package shared

type ShortAccount struct {
	Active            *int64  `json:"active,omitempty"`
	Email             *string `json:"email,omitempty"`
	FirstName         *string `json:"first_name,omitempty"`
	ID                *int64  `json:"id,omitempty"`
	InstitutionID     *int64  `json:"institution_id,omitempty"`
	InstitutionUserID *string `json:"institution_user_id,omitempty"`
	LastName          *string `json:"last_name,omitempty"`
}
