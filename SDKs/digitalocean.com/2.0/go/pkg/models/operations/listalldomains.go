package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllDomains200ApplicationJSONDomainsOutput struct {
	Name     *string `json:"name,omitempty"`
	TTL      *int64  `json:"ttl,omitempty"`
	ZoneFile *string `json:"zone_file,omitempty"`
}

type ListAllDomains200ApplicationJSONOutput struct {
	Domains []ListAllDomains200ApplicationJSONDomainsOutput `json:"domains"`
}

type ListAllDomains401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllDomainsResponseOutput struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllDomains200ApplicationJSONObject                    *ListAllDomains200ApplicationJSONOutput
	ListAllDomains401ApplicationJSONObject                    *ListAllDomains401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
