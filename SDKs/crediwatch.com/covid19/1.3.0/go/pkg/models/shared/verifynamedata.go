package shared

type VerifyNameData struct {
	BusinessName          *string  `json:"business_name,omitempty"`
	City                  *string  `json:"city,omitempty"`
	DepartmentCodeAndType []string `json:"department_code_and_type,omitempty"`
	EntityType            *string  `json:"entity_type,omitempty"`
	IsGstnVerified        *bool    `json:"is_gstn_verified,omitempty"`
	NatureOfBusiness      []string `json:"nature_of_business,omitempty"`
	Pincode               *int64   `json:"pincode,omitempty"`
	RegistrationDate      *string  `json:"registration_date,omitempty"`
	RegistrationType      *string  `json:"registration_type,omitempty"`
	State                 *string  `json:"state,omitempty"`
}
