// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ScheduleAutoImportRequest - The message request to schedule the auto import
type ScheduleAutoImportRequest struct {
	// If null the local time zone name will be "Romance Standard Time"
	LocalTimeZoneName *string `json:"localTimeZoneName,omitempty"`
	// Indicate the time span you want to import your catalog. (i.e. "21:00:00" to import your catalog at 9PM)
	Schedules []string `json:"schedules"`
}
