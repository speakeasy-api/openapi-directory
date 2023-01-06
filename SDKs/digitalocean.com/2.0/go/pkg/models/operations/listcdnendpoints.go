package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListCdnEndpointsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListCdnEndpoints200ApplicationJSONEndpoints struct {
	CertificateID *string    `json:"certificate_id,omitempty"`
	CreatedAt     *time.Time `json:"created_at,omitempty"`
	CustomDomain  *string    `json:"custom_domain,omitempty"`
	Endpoint      *string    `json:"endpoint,omitempty"`
	ID            *string    `json:"id,omitempty"`
	Origin        string     `json:"origin"`
	TTL           *int64     `json:"ttl,omitempty"`
}

type ListCdnEndpoints200ApplicationJSON struct {
	Endpoints []ListCdnEndpoints200ApplicationJSONEndpoints `json:"endpoints,omitempty"`
}

type ListCdnEndpoints401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListCdnEndpointsRequest struct {
	QueryParams ListCdnEndpointsQueryParams
}

type ListCdnEndpointsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListCdnEndpoints200ApplicationJSONObject                  *ListCdnEndpoints200ApplicationJSON
	ListCdnEndpoints401ApplicationJSONObject                  *ListCdnEndpoints401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
