package operations

import (
	"openapi/pkg/models/shared"
)

type ListProjects200ApplicationJSONProjects struct {
	IsDefault *bool `json:"is_default,omitempty"`
}

type ListProjects200ApplicationJSON struct {
	Projects []ListProjects200ApplicationJSONProjects `json:"projects,omitempty"`
}

type ListProjects401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListProjectsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListProjects200ApplicationJSONObject                      *ListProjects200ApplicationJSON
	ListProjects401ApplicationJSONObject                      *ListProjects401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
