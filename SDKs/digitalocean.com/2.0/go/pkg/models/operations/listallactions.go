package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllActionsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAllActions200ApplicationJSONLinksPages1 struct {
	Prev *string `json:"prev,omitempty"`
}

type ListAllActions200ApplicationJSONLinksPages3 struct {
	Next *string `json:"next,omitempty"`
}

type ListAllActions200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListAllActions200ApplicationJSON struct {
	Links *ListAllActions200ApplicationJSONLinks `json:"links,omitempty"`
}

type ListAllActions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllActionsRequest struct {
	QueryParams ListAllActionsQueryParams
}

type ListAllActionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllActions200ApplicationJSONObject                    *ListAllActions200ApplicationJSON
	ListAllActions401ApplicationJSONObject                    *ListAllActions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
