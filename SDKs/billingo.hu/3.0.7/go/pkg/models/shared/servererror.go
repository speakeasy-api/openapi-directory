// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type ServerError struct {
	Message *string `json:"message,omitempty"`
	// You should send us this ID to investigate the issue.
	TraceID *string `json:"trace_id,omitempty"`
}
