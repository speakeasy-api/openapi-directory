package operations

import (
	"openapi/pkg/models/shared"
)

type ListDefaultProjectResources200ApplicationJSONLinksPages1 struct {
	Prev *string `json:"prev,omitempty"`
}

type ListDefaultProjectResources200ApplicationJSONLinksPages3 struct {
	Next *string `json:"next,omitempty"`
}

type ListDefaultProjectResources200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListDefaultProjectResources200ApplicationJSON struct {
	Links *ListDefaultProjectResources200ApplicationJSONLinks `json:"links,omitempty"`
}

type ListDefaultProjectResources401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListDefaultProjectResourcesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDefaultProjectResources200ApplicationJSONObject       *ListDefaultProjectResources200ApplicationJSON
	ListDefaultProjectResources401ApplicationJSONObject       *ListDefaultProjectResources401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
