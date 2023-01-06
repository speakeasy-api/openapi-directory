package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
}

type DeleteProject401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type DeleteProjectRequest struct {
	PathParams DeleteProjectPathParams
}

type DeleteProjectResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteProject401ApplicationJSONObject                     *DeleteProject401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
