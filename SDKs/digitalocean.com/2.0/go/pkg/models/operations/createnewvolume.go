package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNewVolumeRequestBody1Input struct {
	Description   *string  `json:"description,omitempty"`
	Name          string   `json:"name"`
	SizeGigabytes int64    `json:"size_gigabytes"`
	Tags          []string `json:"tags,omitempty"`
}

type CreateNewVolumeRequestBody2 struct {
	FilesystemType string `json:"filesystem_type"`
}

type CreateNewVolume401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateNewVolumeRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateNewVolumeResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateNewVolume201ApplicationJSONAny                      *interface{}
	CreateNewVolume401ApplicationJSONObject                   *CreateNewVolume401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
