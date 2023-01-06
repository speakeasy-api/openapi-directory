package operations

import (
	"openapi/pkg/models/shared"
)

type PostImageActionPathParams struct {
	ImageID int64 `pathParam:"style=simple,explode=false,name=image_id"`
}

type PostImageActionRequestBody1 struct {
	Region shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
}

type PostImageActionRequestBody2TypeEnum string

const (
	PostImageActionRequestBody2TypeEnumConvert  PostImageActionRequestBody2TypeEnum = "convert"
	PostImageActionRequestBody2TypeEnumTransfer PostImageActionRequestBody2TypeEnum = "transfer"
)

type PostImageActionRequestBody2 struct {
	Type PostImageActionRequestBody2TypeEnum `json:"type"`
}

type PostImageAction401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type PostImageActionRequest struct {
	PathParams PostImageActionPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostImageActionResponse struct {
	ContentType                                                                           string
	Headers                                                                               map[string][]string
	StatusCode                                                                            int64
	PostImageAction401ApplicationJSONObject                                               *PostImageAction401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema                             *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
	Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems *shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems
}
