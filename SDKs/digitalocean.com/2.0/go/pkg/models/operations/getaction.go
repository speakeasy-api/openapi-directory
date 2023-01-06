package operations

import (
	"openapi/pkg/models/shared"
)

type GetActionPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
}

type GetAction401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetActionRequest struct {
	PathParams GetActionPathParams
}

type GetActionResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetAction200ApplicationJSONAny                            *interface{}
	GetAction401ApplicationJSONObject                         *GetAction401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
