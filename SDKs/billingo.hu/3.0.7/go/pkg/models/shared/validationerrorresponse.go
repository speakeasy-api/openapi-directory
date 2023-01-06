package shared

type ValidationErrorResponse struct {
	Errors  []ValidationError `json:"errors,omitempty"`
	Message *string           `json:"message,omitempty"`
}
