package shared

type InstitutionAccountsSearch struct {
	Email             *string `json:"email,omitempty"`
	InstitutionUserID *string `json:"institution_user_id,omitempty"`
	IsActive          *int64  `json:"is_active,omitempty"`
	Limit             *int64  `json:"limit,omitempty"`
	Offset            *int64  `json:"offset,omitempty"`
	Page              *int64  `json:"page,omitempty"`
	PageSize          *int64  `json:"page_size,omitempty"`
	SearchFor         *string `json:"search_for,omitempty"`
}
