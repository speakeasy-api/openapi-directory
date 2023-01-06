package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDefaultProjectRequestBody struct {
	IsDefault bool `json:"is_default"`
}

type UpdateDefaultProject401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpdateDefaultProjectRequest struct {
	Request UpdateDefaultProjectRequestBody `request:"mediaType=application/json"`
}

type UpdateDefaultProjectResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateDefaultProject200ApplicationJSONAny                 *interface{}
	UpdateDefaultProject401ApplicationJSONObject              *UpdateDefaultProject401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
