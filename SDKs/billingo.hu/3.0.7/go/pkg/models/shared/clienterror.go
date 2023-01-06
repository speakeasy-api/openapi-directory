package shared

type ClientError struct {
	Message *string `json:"message,omitempty"`
}
