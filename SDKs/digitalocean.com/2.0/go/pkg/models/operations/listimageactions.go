package operations

import (
	"openapi/pkg/models/shared"
)

type ListImageActionsPathParams struct {
	ImageID int64 `pathParam:"style=simple,explode=false,name=image_id"`
}

type ListImageActions200ApplicationJSON struct {
	Actions []shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems `json:"actions,omitempty"`
}

type ListImageActions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListImageActionsRequest struct {
	PathParams ListImageActionsPathParams
}

type ListImageActionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListImageActions200ApplicationJSONObject                  *ListImageActions200ApplicationJSON
	ListImageActions401ApplicationJSONObject                  *ListImageActions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
