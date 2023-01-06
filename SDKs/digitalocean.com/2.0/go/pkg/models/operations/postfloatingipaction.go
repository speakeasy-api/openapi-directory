package operations

import (
	"openapi/pkg/models/shared"
)

type PostFloatingIPActionPathParams struct {
	FloatingIP string `pathParam:"style=simple,explode=false,name=floating_ip"`
}

type PostFloatingIPActionRequestBody2 struct {
	DropletID int64 `json:"droplet_id"`
}

type PostFloatingIPAction401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type PostFloatingIPActionRequest struct {
	PathParams PostFloatingIPActionPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostFloatingIPActionResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	PostFloatingIPAction201ApplicationJSONAny                 *interface{}
	PostFloatingIPAction401ApplicationJSONObject              *PostFloatingIPAction401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
