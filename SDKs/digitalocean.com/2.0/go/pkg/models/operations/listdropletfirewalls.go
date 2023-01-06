package operations

import (
	"openapi/pkg/models/shared"
)

type ListDropletFirewallsPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type ListDropletFirewallsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesSources struct {
	Addresses        []string               `json:"addresses,omitempty"`
	DropletIds       []int64                `json:"droplet_ids,omitempty"`
	KubernetesIds    []string               `json:"kubernetes_ids,omitempty"`
	LoadBalancerUids []string               `json:"load_balancer_uids,omitempty"`
	Tags             map[string]interface{} `json:"tags,omitempty"`
}

type ListDropletFirewalls200ApplicationJSONFirewallsInboundRules struct {
	Sources ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesSources `json:"sources"`
}

type ListDropletFirewalls200ApplicationJSONFirewallsOutboundRules struct {
	Destinations shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 `json:"destinations"`
}

type ListDropletFirewalls200ApplicationJSONFirewalls struct {
	InboundRules  []ListDropletFirewalls200ApplicationJSONFirewallsInboundRules  `json:"inbound_rules,omitempty"`
	OutboundRules []ListDropletFirewalls200ApplicationJSONFirewallsOutboundRules `json:"outbound_rules,omitempty"`
}

type ListDropletFirewalls200ApplicationJSON struct {
	Firewalls []ListDropletFirewalls200ApplicationJSONFirewalls `json:"firewalls,omitempty"`
}

type ListDropletFirewalls401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListDropletFirewallsRequest struct {
	PathParams  ListDropletFirewallsPathParams
	QueryParams ListDropletFirewallsQueryParams
}

type ListDropletFirewallsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDropletFirewalls200ApplicationJSONObject              *ListDropletFirewalls200ApplicationJSON
	ListDropletFirewalls401ApplicationJSONObject              *ListDropletFirewalls401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
