package shared

// SoapNoteLineItemFieldValue
// Values entered by doctor when charting a particular appointment
type SoapNoteLineItemFieldValue struct {
	Appointment       int64   `json:"appointment"`
	ClinicalNoteField int64   `json:"clinical_note_field"`
	CreatedAt         *string `json:"created_at,omitempty"`
	ID                *int64  `json:"id,omitempty"`
	UpdatedAt         *string `json:"updated_at,omitempty"`
	Value             string  `json:"value"`
}
