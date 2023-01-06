package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomImageRequestBody struct {
	Region shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
	Tags   []string                                                                                                                                `json:"tags,omitempty"`
	URL    string                                                                                                                                  `json:"url"`
}

type CreateCustomImage401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateCustomImageRequest struct {
	Request CreateCustomImageRequestBody `request:"mediaType=application/json"`
}

type CreateCustomImageResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateCustomImage202ApplicationJSONAny                    *interface{}
	CreateCustomImage401ApplicationJSONObject                 *CreateCustomImage401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
