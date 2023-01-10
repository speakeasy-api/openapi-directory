package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
}

type UpdateProjectRequestBodyEnvironmentEnum string

const (
	UpdateProjectRequestBodyEnvironmentEnumDevelopment UpdateProjectRequestBodyEnvironmentEnum = "Development"
	UpdateProjectRequestBodyEnvironmentEnumStaging     UpdateProjectRequestBodyEnvironmentEnum = "Staging"
	UpdateProjectRequestBodyEnvironmentEnumProduction  UpdateProjectRequestBodyEnvironmentEnum = "Production"
)

type UpdateProjectRequestBodyInput struct {
	Description string                                  `json:"description"`
	Environment UpdateProjectRequestBodyEnvironmentEnum `json:"environment"`
	IsDefault   bool                                    `json:"is_default"`
	Name        string                                  `json:"name"`
	Purpose     string                                  `json:"purpose"`
}

type UpdateProject401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpdateProjectRequest struct {
	PathParams UpdateProjectPathParams
	Request    UpdateProjectRequestBodyInput `request:"mediaType=application/json"`
}

type UpdateProjectResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateProject200ApplicationJSONAny                        *interface{}
	UpdateProject401ApplicationJSONObject                     *UpdateProject401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
