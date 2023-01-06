package shared

type CustomInsurancePlanName struct {
	Archived          *bool   `json:"archived,omitempty"`
	CreatedAt         *string `json:"created_at,omitempty"`
	Doctor            *string `json:"doctor,omitempty"`
	ID                *int64  `json:"id,omitempty"`
	InsurancePlanName *string `json:"insurance_plan_name,omitempty"`
	UpdatedAt         *string `json:"updated_at,omitempty"`
	User              *string `json:"user,omitempty"`
}
