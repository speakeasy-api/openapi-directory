package shared

// FormResponse
// Response object for forms.
type FormResponse struct {
	Data           *Form   `json:"data,omitempty"`
	Included       []Share `json:"included,omitempty"`
	ResponseStatus *int64  `json:"responseStatus,omitempty"`
}
