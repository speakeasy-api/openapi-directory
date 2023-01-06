package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFirewallRequestBodyInboundRulesSources struct {
	Addresses        []string               `json:"addresses,omitempty"`
	DropletIds       []int64                `json:"droplet_ids,omitempty"`
	KubernetesIds    []string               `json:"kubernetes_ids,omitempty"`
	LoadBalancerUids []string               `json:"load_balancer_uids,omitempty"`
	Tags             map[string]interface{} `json:"tags,omitempty"`
}

type CreateFirewallRequestBodyInboundRules struct {
	Sources CreateFirewallRequestBodyInboundRulesSources `json:"sources"`
}

type CreateFirewallRequestBodyOutboundRules struct {
	Destinations shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 `json:"destinations"`
}

type CreateFirewallRequestBody struct {
	InboundRules  []CreateFirewallRequestBodyInboundRules  `json:"inbound_rules,omitempty"`
	OutboundRules []CreateFirewallRequestBodyOutboundRules `json:"outbound_rules,omitempty"`
}

type CreateFirewall401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateFirewallRequest struct {
	Request *CreateFirewallRequestBody `request:"mediaType=application/json"`
}

type CreateFirewallResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateFirewall202ApplicationJSONAny                       *interface{}
	CreateFirewall401ApplicationJSONObject                    *CreateFirewall401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
