package operations

import (
	"openapi/pkg/models/shared"
)

// ListInvoices200ApplicationJSONMeta
// Information about the response itself.
type ListInvoices200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListInvoices200ApplicationJSON struct {
	Meta ListInvoices200ApplicationJSONMeta `json:"meta"`
}

type ListInvoices401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListInvoicesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListInvoices200ApplicationJSONObject                      *ListInvoices200ApplicationJSON
	ListInvoices401ApplicationJSONObject                      *ListInvoices401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
