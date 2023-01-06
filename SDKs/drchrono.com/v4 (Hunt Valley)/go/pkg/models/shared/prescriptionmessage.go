package shared

type PrescriptionMessageMessageDirectionEnum string

const (
	PrescriptionMessageMessageDirectionEnumI PrescriptionMessageMessageDirectionEnum = "I"
	PrescriptionMessageMessageDirectionEnumO PrescriptionMessageMessageDirectionEnum = "O"
)

type PrescriptionMessage struct {
	CreatedAt        *string                                  `json:"created_at,omitempty"`
	Doctor           *int64                                   `json:"doctor,omitempty"`
	ID               *int64                                   `json:"id,omitempty"`
	JSONData         *string                                  `json:"json_data,omitempty"`
	MessageDirection *PrescriptionMessageMessageDirectionEnum `json:"message_direction,omitempty"`
	MessageStatus    *string                                  `json:"message_status,omitempty"`
	MessageType      *string                                  `json:"message_type,omitempty"`
	ParentMessage    *string                                  `json:"parent_message,omitempty"`
	Patient          *int64                                   `json:"patient,omitempty"`
	Pharmacy         *string                                  `json:"pharmacy,omitempty"`
}
