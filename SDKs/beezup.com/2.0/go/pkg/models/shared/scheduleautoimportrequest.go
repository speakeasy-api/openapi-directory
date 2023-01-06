package shared

// ScheduleAutoImportRequest
// The message request to schedule the auto import
type ScheduleAutoImportRequest struct {
	LocalTimeZoneName *string  `json:"localTimeZoneName,omitempty"`
	Schedules         []string `json:"schedules"`
}
