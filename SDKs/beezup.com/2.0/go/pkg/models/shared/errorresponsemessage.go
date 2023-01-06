package shared

type ErrorResponseMessage struct {
	Errors []UserErrorMessage `json:"errors"`
}
