package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllKeysQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAllKeys200ApplicationJSONSSHKeys struct {
	Fingerprint *string `json:"fingerprint,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Name        string  `json:"name"`
	PublicKey   string  `json:"public_key"`
}

type ListAllKeys200ApplicationJSON struct {
	SSHKeys []ListAllKeys200ApplicationJSONSSHKeys `json:"ssh_keys,omitempty"`
}

type ListAllKeys401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllKeysRequest struct {
	QueryParams ListAllKeysQueryParams
}

type ListAllKeysResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllKeys200ApplicationJSONObject                       *ListAllKeys200ApplicationJSON
	ListAllKeys401ApplicationJSONObject                       *ListAllKeys401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
