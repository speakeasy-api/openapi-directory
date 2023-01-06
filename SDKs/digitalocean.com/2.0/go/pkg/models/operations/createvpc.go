package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVpcRequestBody struct {
	IPRange *string `json:"ip_range,omitempty"`
	Region  string  `json:"region"`
}

type CreateVpc201ApplicationJSON struct {
	Vpc *shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems `json:"vpc,omitempty"`
}

type CreateVpc401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateVpcRequest struct {
	Request CreateVpcRequestBody `request:"mediaType=application/json"`
}

type CreateVpcResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateVpc201ApplicationJSONObject                         *CreateVpc201ApplicationJSON
	CreateVpc401ApplicationJSONObject                         *CreateVpc401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
