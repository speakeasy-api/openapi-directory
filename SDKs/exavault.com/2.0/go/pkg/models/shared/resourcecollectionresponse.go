package shared

// ResourceCollectionResponse
// Response object for collection of resources.
type ResourceCollectionResponse struct {
	Data            []Resource    `json:"data,omitempty"`
	Included        []interface{} `json:"included,omitempty"`
	ResponseStatus  *int64        `json:"responseStatus,omitempty"`
	ReturnedResults *int64        `json:"returnedResults,omitempty"`
	TotalResults    *int64        `json:"totalResults,omitempty"`
}
