package shared

type ServerErrorResponse struct {
	Error *ServerError `json:"error,omitempty"`
}
