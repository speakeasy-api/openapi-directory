package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomainRecordPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
}

type CreateDomainRecord401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateDomainRecordRequest struct {
	PathParams CreateDomainRecordPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type CreateDomainRecordResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateDomainRecord201ApplicationJSONAny                   *interface{}
	CreateDomainRecord401ApplicationJSONObject                *CreateDomainRecord401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
