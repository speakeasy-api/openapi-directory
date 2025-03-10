// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// ProjectsUpdateRequestBodyOrganizationPermissionEnum - The baseline permission that all organization members have on this project
type ProjectsUpdateRequestBodyOrganizationPermissionEnum string

const (
	ProjectsUpdateRequestBodyOrganizationPermissionEnumRead  ProjectsUpdateRequestBodyOrganizationPermissionEnum = "read"
	ProjectsUpdateRequestBodyOrganizationPermissionEnumWrite ProjectsUpdateRequestBodyOrganizationPermissionEnum = "write"
	ProjectsUpdateRequestBodyOrganizationPermissionEnumAdmin ProjectsUpdateRequestBodyOrganizationPermissionEnum = "admin"
	ProjectsUpdateRequestBodyOrganizationPermissionEnumNone  ProjectsUpdateRequestBodyOrganizationPermissionEnum = "none"
)

func (e ProjectsUpdateRequestBodyOrganizationPermissionEnum) ToPointer() *ProjectsUpdateRequestBodyOrganizationPermissionEnum {
	return &e
}

func (e *ProjectsUpdateRequestBodyOrganizationPermissionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "read":
		fallthrough
	case "write":
		fallthrough
	case "admin":
		fallthrough
	case "none":
		*e = ProjectsUpdateRequestBodyOrganizationPermissionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ProjectsUpdateRequestBodyOrganizationPermissionEnum: %v", v)
	}
}

type ProjectsUpdateRequestBody struct {
	// Body of the project
	Body *string `json:"body,omitempty"`
	// Name of the project
	Name *string `json:"name,omitempty"`
	// The baseline permission that all organization members have on this project
	OrganizationPermission *ProjectsUpdateRequestBodyOrganizationPermissionEnum `json:"organization_permission,omitempty"`
	// Whether or not this project can be seen by everyone.
	Private *bool `json:"private,omitempty"`
	// State of the project; either 'open' or 'closed'
	State *string `json:"state,omitempty"`
}

type ProjectsUpdateRequest struct {
	RequestBody *ProjectsUpdateRequestBody `request:"mediaType=application/json"`
	ProjectID   int64                      `pathParam:"style=simple,explode=false,name=project_id"`
}

// ProjectsUpdate403ApplicationJSON - Forbidden
type ProjectsUpdate403ApplicationJSON struct {
	DocumentationURL *string  `json:"documentation_url,omitempty"`
	Errors           []string `json:"errors,omitempty"`
	Message          *string  `json:"message,omitempty"`
}

type ProjectsUpdateResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Requires authentication
	BasicError *shared.BasicError
	// Response
	Project *shared.Project
	// Forbidden
	ProjectsUpdate403ApplicationJSONObject *ProjectsUpdate403ApplicationJSON
	// Validation failed
	ValidationErrorSimple *shared.ValidationErrorSimple
}
