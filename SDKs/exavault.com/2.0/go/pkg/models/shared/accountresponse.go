package shared

type AccountResponse struct {
	Data           *Account `json:"data,omitempty"`
	Included       []User   `json:"included,omitempty"`
	ResponseStatus *int64   `json:"responseStatus,omitempty"`
}
