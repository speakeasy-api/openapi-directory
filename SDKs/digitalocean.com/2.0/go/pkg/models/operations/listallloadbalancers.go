package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllLoadBalancersQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAllLoadBalancers200ApplicationJSON struct {
	LoadBalancers []shared.Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer `json:"load_balancers,omitempty"`
}

type ListAllLoadBalancers401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllLoadBalancersRequest struct {
	QueryParams ListAllLoadBalancersQueryParams
}

type ListAllLoadBalancersResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllLoadBalancers200ApplicationJSONObject              *ListAllLoadBalancers200ApplicationJSON
	ListAllLoadBalancers401ApplicationJSONObject              *ListAllLoadBalancers401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
