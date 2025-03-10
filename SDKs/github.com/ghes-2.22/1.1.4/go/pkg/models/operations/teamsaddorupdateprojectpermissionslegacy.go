// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum - The permission to grant to the team for this project. Can be one of:
// \* `read` - team members can read, but not write to or administer this project.
// \* `write` - team members can read and write, but not administer this project.
// \* `admin` - team members can read, write and administer this project.
// Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."
type TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum string

const (
	TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnumRead  TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum = "read"
	TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnumWrite TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum = "write"
	TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnumAdmin TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum = "admin"
)

func (e TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum) ToPointer() *TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum {
	return &e
}

func (e *TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum) UnmarshalJSON(data []byte) error {
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
		*e = TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum: %v", v)
	}
}

type TeamsAddOrUpdateProjectPermissionsLegacyRequestBody struct {
	// The permission to grant to the team for this project. Can be one of:
	// \* `read` - team members can read, but not write to or administer this project.
	// \* `write` - team members can read and write, but not administer this project.
	// \* `admin` - team members can read, write and administer this project.
	// Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."
	Permission *TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum `json:"permission,omitempty"`
}

type TeamsAddOrUpdateProjectPermissionsLegacyRequest struct {
	RequestBody *TeamsAddOrUpdateProjectPermissionsLegacyRequestBody `request:"mediaType=application/json"`
	ProjectID   int64                                                `pathParam:"style=simple,explode=false,name=project_id"`
	TeamID      int64                                                `pathParam:"style=simple,explode=false,name=team_id"`
}

// TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON - Forbidden if the project is not owned by the organization
type TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type TeamsAddOrUpdateProjectPermissionsLegacyResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Resource not found
	BasicError *shared.BasicError
	// Forbidden if the project is not owned by the organization
	TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSONObject *TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON
	// Validation failed
	ValidationError *shared.ValidationError
}
