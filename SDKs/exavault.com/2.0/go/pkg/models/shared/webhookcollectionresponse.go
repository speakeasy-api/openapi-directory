package shared

type WebhookCollectionResponse struct {
	Data            []Webhook     `json:"data,omitempty"`
	Included        []interface{} `json:"included,omitempty"`
	ResponseStatus  *int64        `json:"responseStatus,omitempty"`
	ReturnedResults *int64        `json:"returnedResults,omitempty"`
	TotalResults    *int64        `json:"totalResults,omitempty"`
}
