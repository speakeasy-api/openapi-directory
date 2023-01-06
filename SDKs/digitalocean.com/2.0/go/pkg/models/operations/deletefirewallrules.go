package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFirewallRulesPathParams struct {
	FirewallID string `pathParam:"style=simple,explode=false,name=firewall_id"`
}

type DeleteFirewallRules401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type DeleteFirewallRulesRequest struct {
	PathParams DeleteFirewallRulesPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type DeleteFirewallRulesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteFirewallRules401ApplicationJSONObject               *DeleteFirewallRules401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
