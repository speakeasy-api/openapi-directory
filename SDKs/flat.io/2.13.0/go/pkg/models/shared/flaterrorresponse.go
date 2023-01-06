package shared

// FlatErrorResponse
// An API Error response
type FlatErrorResponse struct {
	Code    *string `json:"code,omitempty"`
	ID      *string `json:"id,omitempty"`
	Message *string `json:"message,omitempty"`
	Param   *string `json:"param,omitempty"`
}
