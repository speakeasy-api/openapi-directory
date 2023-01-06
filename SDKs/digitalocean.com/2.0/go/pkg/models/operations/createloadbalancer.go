package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLoadBalancerRequestBodyAssignDropletsByID struct {
	DropletIds []int64 `json:"droplet_ids,omitempty"`
}

type CreateLoadBalancerRequestBodyAssignDropletsByTag struct {
	Region *shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region,omitempty"`
}

type CreateLoadBalancer401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateLoadBalancerRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateLoadBalancerResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateLoadBalancer202ApplicationJSONAny                   *interface{}
	CreateLoadBalancer401ApplicationJSONObject                *CreateLoadBalancer401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
