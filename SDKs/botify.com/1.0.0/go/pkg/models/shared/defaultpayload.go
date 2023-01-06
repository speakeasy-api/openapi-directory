package shared

type DefaultPayloadError struct {
	ErrorCode   *string                `json:"error_code,omitempty"`
	ErrorDetail map[string]interface{} `json:"error_detail,omitempty"`
	Message     *string                `json:"message,omitempty"`
}

// DefaultPayload
// default payload for object for all HTTP codes that are not covered individually
type DefaultPayload struct {
	Error *DefaultPayloadError `json:"error,omitempty"`
}
