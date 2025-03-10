// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// WebhookActivityResponse - Session activity list response
type WebhookActivityResponse struct {
	Data []WebhookActivityEntry `json:"data,omitempty"`
	// Http status code of the response.
	ResponseStatus *int64 `json:"responseStatus,omitempty"`
	// Number of results returned.
	ReturnedResults *int64 `json:"returnedResults,omitempty"`
	// Total results found.
	TotalResults *int64 `json:"totalResults,omitempty"`
}
