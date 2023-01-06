package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllVolumeActionsPathParams struct {
	VolumeID string `pathParam:"style=simple,explode=false,name=volume_id"`
}

type ListAllVolumeActionsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAllVolumeActions200ApplicationJSONLinksPages1 struct {
	Next *string `json:"next,omitempty"`
}

type ListAllVolumeActions200ApplicationJSONLinksPages3 struct {
	Prev *string `json:"prev,omitempty"`
}

type ListAllVolumeActions200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListAllVolumeActions200ApplicationJSON struct {
	Links *ListAllVolumeActions200ApplicationJSONLinks `json:"links,omitempty"`
}

type ListAllVolumeActions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllVolumeActionsRequest struct {
	PathParams  ListAllVolumeActionsPathParams
	QueryParams ListAllVolumeActionsQueryParams
}

type ListAllVolumeActionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllVolumeActions200ApplicationJSONObject              *ListAllVolumeActions200ApplicationJSON
	ListAllVolumeActions401ApplicationJSONObject              *ListAllVolumeActions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
