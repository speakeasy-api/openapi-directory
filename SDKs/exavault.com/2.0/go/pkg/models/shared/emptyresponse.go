package shared

type EmptyResponse struct {
	Data           []string `json:"data,omitempty"`
	ResponseStatus *int64   `json:"responseStatus,omitempty"`
}
