// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type TeamsGetByNameRequest struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
	// team_slug parameter
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsGetByNameResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Resource not found
	BasicError *shared.BasicError
	// Response
	TeamFull *shared.TeamFull
}
