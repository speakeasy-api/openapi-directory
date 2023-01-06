package operations

import (
	"openapi/pkg/models/shared"
)

type ListVpcsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListVpcs200ApplicationJSONLinksPages1 struct {
	Prev *string `json:"prev,omitempty"`
}

type ListVpcs200ApplicationJSONLinksPages3 struct {
	Next *string `json:"next,omitempty"`
}

type ListVpcs200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListVpcs200ApplicationJSON struct {
	Links *ListVpcs200ApplicationJSONLinks `json:"links,omitempty"`
}

type ListVpcs401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListVpcsRequest struct {
	QueryParams ListVpcsQueryParams
}

type ListVpcsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListVpcs200ApplicationJSONObject                          *ListVpcs200ApplicationJSON
	ListVpcs401ApplicationJSONObject                          *ListVpcs401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
