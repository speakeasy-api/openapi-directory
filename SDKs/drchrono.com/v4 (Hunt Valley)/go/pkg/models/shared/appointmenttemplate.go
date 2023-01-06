package shared

type AppointmentTemplateOpenSlot struct {
	End   *string `json:"end,omitempty"`
	Start *string `json:"start,omitempty"`
}

// AppointmentTemplate
// Appointment templates are blocks of time during which a doctor usually sees appointments with the same profile. These may have a longer duration then the corresponding profile, in which case they may allow multiple appointments to be booked during that period.
type AppointmentTemplate struct {
	Archived      *bool                         `json:"archived,omitempty"`
	DateEnd       *string                       `json:"date_end,omitempty"`
	DateStart     *string                       `json:"date_start,omitempty"`
	Duration      *int64                        `json:"duration,omitempty"`
	ExamRoom      int64                         `json:"exam_room"`
	ID            *int64                        `json:"id,omitempty"`
	Office        int64                         `json:"office"`
	OpenSlots     []AppointmentTemplateOpenSlot `json:"open_slots,omitempty"`
	Profile       int64                         `json:"profile"`
	ScheduledTime string                        `json:"scheduled_time"`
	WeekDays      []int64                       `json:"week_days"`
}
