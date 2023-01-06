package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFirewallPathParams struct {
	FirewallID string `pathParam:"style=simple,explode=false,name=firewall_id"`
}

type UpdateFirewall401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpdateFirewallRequest struct {
	PathParams UpdateFirewallPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type UpdateFirewallResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateFirewall200ApplicationJSONAny                       *interface{}
	UpdateFirewall401ApplicationJSONObject                    *UpdateFirewall401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
