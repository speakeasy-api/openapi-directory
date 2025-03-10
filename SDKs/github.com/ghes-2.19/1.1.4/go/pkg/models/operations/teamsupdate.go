// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// TeamsUpdateRequestBodyPermissionEnum - **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:
// \* `pull` - team members can pull, but not push to or administer newly-added repositories.
// \* `push` - team members can pull and push, but not administer newly-added repositories.
// \* `admin` - team members can pull, push and administer newly-added repositories.
type TeamsUpdateRequestBodyPermissionEnum string

const (
	TeamsUpdateRequestBodyPermissionEnumPull  TeamsUpdateRequestBodyPermissionEnum = "pull"
	TeamsUpdateRequestBodyPermissionEnumPush  TeamsUpdateRequestBodyPermissionEnum = "push"
	TeamsUpdateRequestBodyPermissionEnumAdmin TeamsUpdateRequestBodyPermissionEnum = "admin"
)

func (e TeamsUpdateRequestBodyPermissionEnum) ToPointer() *TeamsUpdateRequestBodyPermissionEnum {
	return &e
}

func (e *TeamsUpdateRequestBodyPermissionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "pull":
		fallthrough
	case "push":
		fallthrough
	case "admin":
		*e = TeamsUpdateRequestBodyPermissionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TeamsUpdateRequestBodyPermissionEnum: %v", v)
	}
}

// TeamsUpdateRequestBodyPrivacyEnum - The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:
// **For a non-nested team:**
// \* `secret` - only visible to organization owners and members of this team.
// \* `closed` - visible to all members of this organization.
// **For a parent or child team:**
// \* `closed` - visible to all members of this organization.
type TeamsUpdateRequestBodyPrivacyEnum string

const (
	TeamsUpdateRequestBodyPrivacyEnumSecret TeamsUpdateRequestBodyPrivacyEnum = "secret"
	TeamsUpdateRequestBodyPrivacyEnumClosed TeamsUpdateRequestBodyPrivacyEnum = "closed"
)

func (e TeamsUpdateRequestBodyPrivacyEnum) ToPointer() *TeamsUpdateRequestBodyPrivacyEnum {
	return &e
}

func (e *TeamsUpdateRequestBodyPrivacyEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "secret":
		fallthrough
	case "closed":
		*e = TeamsUpdateRequestBodyPrivacyEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TeamsUpdateRequestBodyPrivacyEnum: %v", v)
	}
}

type TeamsUpdateRequestBody struct {
	// The description of the team.
	Description *string `json:"description,omitempty"`
	// The name of the team.
	Name *string `json:"name,omitempty"`
	// The ID of a team to set as the parent team. **Note**: You must pass the `hellcat-preview` media type to use this parameter.
	ParentTeamID *int64 `json:"parent_team_id,omitempty"`
	// **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:
	// \* `pull` - team members can pull, but not push to or administer newly-added repositories.
	// \* `push` - team members can pull and push, but not administer newly-added repositories.
	// \* `admin` - team members can pull, push and administer newly-added repositories.
	Permission *TeamsUpdateRequestBodyPermissionEnum `json:"permission,omitempty"`
	// The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:
	// **For a non-nested team:**
	// \* `secret` - only visible to organization owners and members of this team.
	// \* `closed` - visible to all members of this organization.
	// **For a parent or child team:**
	// \* `closed` - visible to all members of this organization.
	Privacy *TeamsUpdateRequestBodyPrivacyEnum `json:"privacy,omitempty"`
}

type TeamsUpdateRequest struct {
	RequestBody *TeamsUpdateRequestBody `request:"mediaType=application/json"`
	TeamID      int64                   `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsUpdateResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	TeamFull *shared.TeamFull
}
