package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllRegionsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAllRegions200ApplicationJSON struct {
	Regions []shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion `json:"regions"`
}

type ListAllRegions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllRegionsRequest struct {
	QueryParams ListAllRegionsQueryParams
}

type ListAllRegionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllRegions200ApplicationJSONObject                    *ListAllRegions200ApplicationJSON
	ListAllRegions401ApplicationJSONObject                    *ListAllRegions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
