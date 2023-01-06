package shared

type PatientFlagType struct {
	Archived  *bool   `json:"archived,omitempty"`
	Color     *string `json:"color,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Doctor    int64   `json:"doctor"`
	ID        *int64  `json:"id,omitempty"`
	Name      string  `json:"name"`
	Priority  *int64  `json:"priority,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}
