package shared

// FormEntryResponse
// Response object of the form data.
type FormEntryResponse struct {
	Data            []FormEntry `json:"data,omitempty"`
	ResponseStatus  *int64      `json:"responseStatus,omitempty"`
	ReturnedResults *int64      `json:"returnedResults,omitempty"`
	TotalResults    *int64      `json:"totalResults,omitempty"`
}
