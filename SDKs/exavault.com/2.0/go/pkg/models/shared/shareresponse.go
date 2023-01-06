package shared

// ShareResponse
// Response object for shares.
type ShareResponse struct {
	Data           *Share        `json:"data,omitempty"`
	Included       []interface{} `json:"included,omitempty"`
	ResponseStatus *int64        `json:"responseStatus,omitempty"`
}
