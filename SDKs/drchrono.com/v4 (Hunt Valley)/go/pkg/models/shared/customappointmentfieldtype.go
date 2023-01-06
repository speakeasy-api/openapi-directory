package shared

type CustomAppointmentFieldType struct {
	Archived  *bool   `json:"archived,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Doctor    *string `json:"doctor,omitempty"`
	FieldDesc *string `json:"field_desc,omitempty"`
	FieldName *string `json:"field_name,omitempty"`
	ID        *int64  `json:"id,omitempty"`
	Order     *int64  `json:"order,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}
