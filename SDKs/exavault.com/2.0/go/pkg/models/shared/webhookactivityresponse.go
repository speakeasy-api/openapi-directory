package shared

// WebhookActivityResponse
// Session activity list response
type WebhookActivityResponse struct {
	Data            []WebhookActivityEntry `json:"data,omitempty"`
	ResponseStatus  *int64                 `json:"responseStatus,omitempty"`
	ReturnedResults *int64                 `json:"returnedResults,omitempty"`
	TotalResults    *int64                 `json:"totalResults,omitempty"`
}
