package shared

// RuleViolationError
// All error responses, whether `4xx` or `5xx` will include one of these as the response
// body.
type RuleViolationError struct {
	Causes    []RuleViolationCause `json:"causes"`
	Detail    *string              `json:"detail,omitempty"`
	ErrorCode *int32               `json:"error_code,omitempty"`
	Message   *string              `json:"message,omitempty"`
	Name      *string              `json:"name,omitempty"`
}
