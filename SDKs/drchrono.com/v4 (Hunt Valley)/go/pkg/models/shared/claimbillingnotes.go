package shared

type ClaimBillingNotes struct {
	Appointment int64   `json:"appointment"`
	CreatedAt   *string `json:"created_at,omitempty"`
	CreatedBy   *string `json:"created_by,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Text        *string `json:"text,omitempty"`
}
