package shared

type ServerError struct {
	Message *string `json:"message,omitempty"`
	TraceID *string `json:"trace_id,omitempty"`
}
