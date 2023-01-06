package operations

import (
	"openapi/pkg/models/shared"
)

type AddFirewallRulesPathParams struct {
	FirewallID string `pathParam:"style=simple,explode=false,name=firewall_id"`
}

type AddFirewallRules401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type AddFirewallRulesRequest struct {
	PathParams AddFirewallRulesPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type AddFirewallRulesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	AddFirewallRules401ApplicationJSONObject                  *AddFirewallRules401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
