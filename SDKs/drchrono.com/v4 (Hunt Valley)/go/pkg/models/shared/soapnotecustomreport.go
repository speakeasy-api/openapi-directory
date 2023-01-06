package shared

// SoapNoteCustomReportClinicalNoteField
// Array of field objects
type SoapNoteCustomReportClinicalNoteField struct {
	AllowedValues        []string `json:"allowed_values,omitempty"`
	Archived             *bool    `json:"archived,omitempty"`
	ClinicalNoteTemplate *int64   `json:"clinical_note_template,omitempty"`
	DataType             *string  `json:"data_type,omitempty"`
	Name                 *string  `json:"name,omitempty"`
	Required             *bool    `json:"required,omitempty"`
}

// SoapNoteCustomReportSoapNoteCustomReport
// Order of templates
type SoapNoteCustomReportSoapNoteCustomReport struct {
	OnCompleteNote *int64 `json:"on_complete_note,omitempty"`
	OnIpad         *int64 `json:"on_ipad,omitempty"`
}

type SoapNoteCustomReport struct {
	Archived           *bool                                     `json:"archived,omitempty"`
	ClinicalNoteFields []SoapNoteCustomReportClinicalNoteField   `json:"clinical_note_fields,omitempty"`
	Doctor             *string                                   `json:"doctor,omitempty"`
	ID                 *int64                                    `json:"id,omitempty"`
	IsOnpatient        *bool                                     `json:"is_onpatient,omitempty"`
	IsPersistent       *bool                                     `json:"is_persistent,omitempty"`
	Name               *string                                   `json:"name,omitempty"`
	Order              *SoapNoteCustomReportSoapNoteCustomReport `json:"order,omitempty"`
	UpdatedAt          *string                                   `json:"updated_at,omitempty"`
}
