package shared

// EmailListResponse
// Response object for a single email list.
type EmailListResponse struct {
	Data           *EmailList `json:"data,omitempty"`
	Included       []User     `json:"included,omitempty"`
	ResponseStatus *int32     `json:"responseStatus,omitempty"`
}
