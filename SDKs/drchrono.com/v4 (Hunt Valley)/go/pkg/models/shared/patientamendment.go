package shared

type PatientAmendment struct {
	AmendmentFile string  `json:"amendment_file"`
	AmendmentName string  `json:"amendment_name"`
	Appointment   *int64  `json:"appointment,omitempty"`
	Comments      *string `json:"comments,omitempty"`
	Doctor        int64   `json:"doctor"`
	ID            *int64  `json:"id,omitempty"`
	Patient       int64   `json:"patient"`
}
