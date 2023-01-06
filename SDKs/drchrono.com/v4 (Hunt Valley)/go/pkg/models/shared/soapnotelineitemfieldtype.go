package shared

type SoapNoteLineItemFieldType struct {
	AllowedValues        []string `json:"allowed_values,omitempty"`
	Archived             *bool    `json:"archived,omitempty"`
	ClinicalNoteTemplate *string  `json:"clinical_note_template,omitempty"`
	Comment              *string  `json:"comment,omitempty"`
	DataType             *string  `json:"data_type,omitempty"`
	ID                   *int64   `json:"id,omitempty"`
	Name                 *string  `json:"name,omitempty"`
	Required             *bool    `json:"required,omitempty"`
}
