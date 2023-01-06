package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectRequestBodyEnvironmentEnum string

const (
	CreateProjectRequestBodyEnvironmentEnumDevelopment CreateProjectRequestBodyEnvironmentEnum = "Development"
	CreateProjectRequestBodyEnvironmentEnumStaging     CreateProjectRequestBodyEnvironmentEnum = "Staging"
	CreateProjectRequestBodyEnvironmentEnumProduction  CreateProjectRequestBodyEnvironmentEnum = "Production"
)

type CreateProjectRequestBodyInput struct {
	Description *string                                  `json:"description,omitempty"`
	Environment *CreateProjectRequestBodyEnvironmentEnum `json:"environment,omitempty"`
	Name        string                                   `json:"name"`
	Purpose     string                                   `json:"purpose"`
}

type CreateProject401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateProjectRequest struct {
	Request CreateProjectRequestBodyInput `request:"mediaType=application/json"`
}

type CreateProjectResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateProject201ApplicationJSONAny                        *interface{}
	CreateProject401ApplicationJSONObject                     *CreateProject401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
