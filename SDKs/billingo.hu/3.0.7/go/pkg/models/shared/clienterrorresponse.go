package shared

type ClientErrorResponse struct {
	Error *ClientError `json:"error,omitempty"`
}
