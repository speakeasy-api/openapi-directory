package shared

type PrivateLink struct {
	ExpiresDate *string `json:"expires_date,omitempty"`
	ID          *string `json:"id,omitempty"`
	IsActive    *bool   `json:"is_active,omitempty"`
}
