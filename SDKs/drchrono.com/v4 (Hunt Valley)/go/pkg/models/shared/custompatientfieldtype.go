package shared

type CustomPatientFieldType struct {
	AllowedValues *string `json:"allowed_values,omitempty"`
	Archived      *bool   `json:"archived,omitempty"`
	Description   *string `json:"description,omitempty"`
	Doctor        int64   `json:"doctor"`
	ID            *int64  `json:"id,omitempty"`
	Name          string  `json:"name"`
	TemplateName  *string `json:"template_name,omitempty"`
}
