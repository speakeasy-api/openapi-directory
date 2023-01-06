package operations

import (
	"openapi/pkg/models/shared"
)

type PostVolumeActionByNameQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type PostVolumeActionByNameRequestBody1 struct {
	DropletID int64    `json:"droplet_id"`
	Tags      []string `json:"tags,omitempty"`
}

type PostVolumeActionByNameRequestBody2 struct {
	DropletID int64 `json:"droplet_id"`
}

type PostVolumeActionByName401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type PostVolumeActionByNameRequest struct {
	QueryParams PostVolumeActionByNameQueryParams
	Request     interface{} `request:"mediaType=application/json"`
}

type PostVolumeActionByNameResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	PostVolumeActionByName202ApplicationJSONAny               *interface{}
	PostVolumeActionByName401ApplicationJSONObject            *PostVolumeActionByName401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
