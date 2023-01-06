package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllSizesQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAllSizes200ApplicationJSON struct {
	Sizes []shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesSize `json:"sizes"`
}

type ListAllSizes401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllSizesRequest struct {
	QueryParams ListAllSizesQueryParams
}

type ListAllSizesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllSizes200ApplicationJSONObject                      *ListAllSizes200ApplicationJSON
	ListAllSizes401ApplicationJSONObject                      *ListAllSizes401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
