package shared

type AccountCreate struct {
	Email             string  `json:"email"`
	FirstName         *string `json:"first_name,omitempty"`
	GroupID           *int64  `json:"group_id,omitempty"`
	InstitutionUserID *string `json:"institution_user_id,omitempty"`
	IsActive          *bool   `json:"is_active,omitempty"`
	LastName          string  `json:"last_name"`
	Quota             *int64  `json:"quota,omitempty"`
	SymplecticUserID  *string `json:"symplectic_user_id,omitempty"`
}
