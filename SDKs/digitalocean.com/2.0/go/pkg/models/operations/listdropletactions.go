package operations

import (
	"openapi/pkg/models/shared"
)

type ListDropletActionsPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type ListDropletActionsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDropletActions200ApplicationJSON struct {
	Actions []shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems `json:"actions,omitempty"`
}

type ListDropletActions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListDropletActionsRequest struct {
	PathParams  ListDropletActionsPathParams
	QueryParams ListDropletActionsQueryParams
}

type ListDropletActionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDropletActions200ApplicationJSONObject                *ListDropletActions200ApplicationJSON
	ListDropletActions401ApplicationJSONObject                *ListDropletActions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
