package operations

import (
	"openapi/pkg/models/shared"
)

type ListFloatingIPActionsPathParams struct {
	FloatingIP string `pathParam:"style=simple,explode=false,name=floating_ip"`
}

type ListFloatingIPActions200ApplicationJSONLinksPages1 struct {
	Prev *string `json:"prev,omitempty"`
}

type ListFloatingIPActions200ApplicationJSONLinksPages3 struct {
	Next *string `json:"next,omitempty"`
}

type ListFloatingIPActions200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListFloatingIPActions200ApplicationJSON struct {
	Links *ListFloatingIPActions200ApplicationJSONLinks `json:"links,omitempty"`
}

type ListFloatingIPActions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListFloatingIPActionsRequest struct {
	PathParams ListFloatingIPActionsPathParams
}

type ListFloatingIPActionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListFloatingIPActions200ApplicationJSONObject             *ListFloatingIPActions200ApplicationJSON
	ListFloatingIPActions401ApplicationJSONObject             *ListFloatingIPActions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
