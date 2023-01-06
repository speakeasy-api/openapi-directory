package operations

import (
	"openapi/pkg/models/shared"
)

type ListProjectResourcesPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
}

type ListProjectResources200ApplicationJSONLinksPages1 struct {
	Prev *string `json:"prev,omitempty"`
}

type ListProjectResources200ApplicationJSONLinksPages3 struct {
	Next *string `json:"next,omitempty"`
}

type ListProjectResources200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListProjectResources200ApplicationJSON struct {
	Links *ListProjectResources200ApplicationJSONLinks `json:"links,omitempty"`
}

type ListProjectResources401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListProjectResourcesRequest struct {
	PathParams ListProjectResourcesPathParams
}

type ListProjectResourcesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListProjectResources200ApplicationJSONObject              *ListProjectResources200ApplicationJSON
	ListProjectResources401ApplicationJSONObject              *ListProjectResources401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
