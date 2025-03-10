// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ReposGetTeamsWithAccessToProtectedBranchRequest struct {
	// The name of the branch.
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetTeamsWithAccessToProtectedBranchResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Resource not found
	BasicError *shared.BasicError
	// Response
	Teams []shared.Team
}
