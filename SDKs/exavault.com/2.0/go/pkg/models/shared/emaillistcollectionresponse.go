package shared

// EmailListCollectionResponse
// Response object for list of email lists
type EmailListCollectionResponse struct {
	Data            []EmailList `json:"data,omitempty"`
	Included        []User      `json:"included,omitempty"`
	ResponseStatus  *int64      `json:"responseStatus,omitempty"`
	ReturnedResults *int64      `json:"returnedResults,omitempty"`
	TotalResults    *int64      `json:"totalResults,omitempty"`
}
