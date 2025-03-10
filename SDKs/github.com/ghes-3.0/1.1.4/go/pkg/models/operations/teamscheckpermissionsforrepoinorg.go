// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type TeamsCheckPermissionsForRepoInOrgRequest struct {
	Org   string `pathParam:"style=simple,explode=false,name=org"`
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	// team_slug parameter
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsCheckPermissionsForRepoInOrgResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Alternative response with repository permissions
	TeamRepository *shared.TeamRepository
}
