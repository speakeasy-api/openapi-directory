package operations

import (
	"openapi/pkg/models/shared"
)

type ListFloatingIps200ApplicationJSONFloatingIps struct {
	Droplet *interface{}           `json:"droplet,omitempty"`
	IP      *string                `json:"ip,omitempty"`
	Locked  *bool                  `json:"locked,omitempty"`
	Region  map[string]interface{} `json:"region,omitempty"`
}

type ListFloatingIps200ApplicationJSON struct {
	FloatingIps []ListFloatingIps200ApplicationJSONFloatingIps `json:"floating_ips,omitempty"`
}

type ListFloatingIps401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListFloatingIpsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListFloatingIps200ApplicationJSONObject                   *ListFloatingIps200ApplicationJSON
	ListFloatingIps401ApplicationJSONObject                   *ListFloatingIps401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
