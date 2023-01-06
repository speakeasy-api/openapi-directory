package operations

import (
	"openapi/pkg/models/shared"
)

type ListFirewallsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListFirewalls200ApplicationJSON struct {
	Firewalls []shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItems `json:"firewalls,omitempty"`
}

type ListFirewalls401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListFirewallsRequest struct {
	QueryParams ListFirewallsQueryParams
}

type ListFirewallsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListFirewalls200ApplicationJSONObject                     *ListFirewalls200ApplicationJSON
	ListFirewalls401ApplicationJSONObject                     *ListFirewalls401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
