// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type IssuesCheckUserCanBeAssignedRequest struct {
	Assignee string `pathParam:"style=simple,explode=false,name=assignee"`
	Owner    string `pathParam:"style=simple,explode=false,name=owner"`
	Repo     string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesCheckUserCanBeAssignedResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Otherwise a `404` status code is returned.
	BasicError *shared.BasicError
}
