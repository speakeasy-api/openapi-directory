package shared

// DoctorMessageMessageNote
// Additional note
type DoctorMessageMessageNote struct {
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	Text      *string `json:"text,omitempty"`
}

type DoctorMessageTypeEnum string

const (
	DoctorMessageTypeEnumGp DoctorMessageTypeEnum = "GP"
	DoctorMessageTypeEnumGc DoctorMessageTypeEnum = "GC"
	DoctorMessageTypeEnumGt DoctorMessageTypeEnum = "GT"
	DoctorMessageTypeEnumGz DoctorMessageTypeEnum = "GZ"
	DoctorMessageTypeEnumIf DoctorMessageTypeEnum = "IF"
	DoctorMessageTypeEnumOf DoctorMessageTypeEnum = "OF"
	DoctorMessageTypeEnumIl DoctorMessageTypeEnum = "IL"
	DoctorMessageTypeEnumIr DoctorMessageTypeEnum = "IR"
	DoctorMessageTypeEnumOr DoctorMessageTypeEnum = "OR"
	DoctorMessageTypeEnumIe DoctorMessageTypeEnum = "IE"
	DoctorMessageTypeEnumOa DoctorMessageTypeEnum = "OA"
	DoctorMessageTypeEnumPo DoctorMessageTypeEnum = "PO"
	DoctorMessageTypeEnumPi DoctorMessageTypeEnum = "PI"
	DoctorMessageTypeEnumPm DoctorMessageTypeEnum = "PM"
	DoctorMessageTypeEnumOo DoctorMessageTypeEnum = "OO"
	DoctorMessageTypeEnumOd DoctorMessageTypeEnum = "OD"
	DoctorMessageTypeEnumID DoctorMessageTypeEnum = "ID"
	DoctorMessageTypeEnumDl DoctorMessageTypeEnum = "DL"
	DoctorMessageTypeEnumCn DoctorMessageTypeEnum = "CN"
)

type DoctorMessage struct {
	Archived        *bool                      `json:"archived,omitempty"`
	Attachment      *string                    `json:"attachment,omitempty"`
	Doctor          int64                      `json:"doctor"`
	ID              *int64                     `json:"id,omitempty"`
	MessageNotes    []DoctorMessageMessageNote `json:"message_notes,omitempty"`
	Owner           *string                    `json:"owner,omitempty"`
	Patient         *int64                     `json:"patient,omitempty"`
	Read            *bool                      `json:"read,omitempty"`
	ReceivedAt      *string                    `json:"received_at,omitempty"`
	ResponsibleUser *string                    `json:"responsible_user,omitempty"`
	Starred         *bool                      `json:"starred,omitempty"`
	Title           string                     `json:"title"`
	Type            *DoctorMessageTypeEnum     `json:"type,omitempty"`
	UpdatedAt       *string                    `json:"updated_at,omitempty"`
	WorkflowStep    *string                    `json:"workflow_step,omitempty"`
}
