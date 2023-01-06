package shared

type ShareRecipientsResponse struct {
	Data           []string `json:"data,omitempty"`
	ResponseStatus *int64   `json:"responseStatus,omitempty"`
}
