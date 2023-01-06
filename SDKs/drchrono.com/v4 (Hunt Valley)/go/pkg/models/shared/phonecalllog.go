package shared

type PhoneCallLog struct {
	Appointment   *int64   `json:"appointment,omitempty"`
	Archived      *bool    `json:"archived,omitempty"`
	Author        *string  `json:"author,omitempty"`
	CashCharged   *float64 `json:"cash_charged,omitempty"`
	CreatedAt     *string  `json:"created_at,omitempty"`
	Doctor        int64    `json:"doctor"`
	Duration      *int64   `json:"duration,omitempty"`
	ID            *int64   `json:"id,omitempty"`
	Message       *string  `json:"message,omitempty"`
	Patient       int64    `json:"patient"`
	ScheduledTime *string  `json:"scheduled_time,omitempty"`
	Title         *string  `json:"title,omitempty"`
	Type          *string  `json:"type,omitempty"`
	UpdatedAt     *string  `json:"updated_at,omitempty"`
}
