package shared

// ResourceResponse
// Response object for resources.
type ResourceResponse struct {
	Data           *Resource     `json:"data,omitempty"`
	Included       []interface{} `json:"included,omitempty"`
	ResponseStatus *int64        `json:"responseStatus,omitempty"`
}
