package shared

type RegisterRequest struct {
	CommercialOwnerUserID *string `json:"commercialOwnerUserId,omitempty"`
	CultureName           *string `json:"cultureName,omitempty"`
	Email                 string  `json:"email"`
	Password              string  `json:"password"`
}
