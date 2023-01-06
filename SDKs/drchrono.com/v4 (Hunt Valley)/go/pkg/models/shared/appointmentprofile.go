package shared

// AppointmentProfile
// Appointment profiles are for common kinds of appointments a doctor might have, such as "physical exam", which have a standard duration and should show up as the same color on the calendar.
type AppointmentProfile struct {
	Archived         *bool   `json:"archived,omitempty"`
	Color            string  `json:"color"`
	Doctor           *int64  `json:"doctor,omitempty"`
	Duration         *int64  `json:"duration,omitempty"`
	ID               *int64  `json:"id,omitempty"`
	Name             string  `json:"name"`
	OnlineScheduling bool    `json:"online_scheduling"`
	Reason           *string `json:"reason,omitempty"`
	SortOrder        *int64  `json:"sort_order,omitempty"`
}
